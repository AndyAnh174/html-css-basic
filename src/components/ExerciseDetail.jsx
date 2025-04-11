import { useState, useEffect } from 'react';

function ExerciseDetail({ exercise, onGoBack }) {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    if (exercise) {
      setCode(exercise.initialCode || '');
      setResult(null);
      setShowSolution(false);
    }
  }, [exercise]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const checkSolution = () => {
    if (!exercise) return;

    try {
      // Tạo hàm từ chuỗi trong exercise.checkFunction
      const checkFn = new Function('return ' + exercise.checkFunction)();
      const result = checkFn(code);
      setResult(result);
    } catch (error) {
      console.error('Lỗi khi kiểm tra bài làm:', error);
      setResult({ error: 'Có lỗi xảy ra khi kiểm tra bài làm.' });
    }
  };

  const toggleSolution = () => {
    setShowSolution(!showSolution);
  };

  if (!exercise) return null;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onGoBack} 
          className="inline-flex items-center px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Quay lại
        </button>
        
        <div className="flex space-x-2">
          <div className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            Dễ
          </div>
          <div className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded-full">HTML/CSS</div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{exercise.title}</h2>
      <p className="text-gray-600 mb-4">{exercise.description}</p>
      
      <div className="mb-6 p-4 bg-gray-800 text-white rounded-md">
        <h3 className="text-lg font-semibold mb-3">Yêu cầu:</h3>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          {exercise.requirements.map((req, index) => (
            <li key={index} className="text-gray-300">{req}</li>
          ))}
        </ul>
        
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <div className="p-2 bg-gray-700 rounded-md">
            <div className="text-gray-400 mb-1">Độ phức tạp về thời gian</div>
            <div className="font-mono font-bold">Mức dễ</div>
          </div>
          <div className="p-2 bg-gray-700 rounded-md">
            <div className="text-gray-400 mb-1">Độ phức tạp không gian</div>
            <div className="font-mono font-bold">Mức dễ</div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">Viết code của bạn:</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={checkSolution} 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm"
                >
                  Kiểm tra
                </button>
                <button 
                  onClick={toggleSolution} 
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition text-sm"
                >
                  {showSolution ? 'Ẩn đáp án' : 'Xem đáp án'}
                </button>
              </div>
            </div>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="bg-gray-100 px-4 py-2 text-sm font-medium border-b border-gray-300">
                Code Editor
              </div>
              <textarea
                value={code}
                onChange={handleCodeChange}
                rows={16}
                className="w-full p-4 font-mono text-sm border-0 focus:outline-none focus:ring-0"
              />
            </div>
          </div>
          
          {showSolution && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Đáp án mẫu:</h3>
              <div className="border border-gray-300 rounded-md">
                <div className="bg-gray-100 px-4 py-2 text-sm font-medium border-b border-gray-300">
                  Solution.html
                </div>
                <pre className="font-mono text-sm p-4 overflow-auto whitespace-pre-wrap bg-white">{exercise.solution}</pre>
              </div>
            </div>
          )}
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Kết quả hiển thị:</h3>
            <div className="border border-gray-300 rounded-md overflow-hidden flex flex-col" style={{minHeight: '300px'}}>
              <div className="bg-gray-100 px-4 py-2 text-sm font-medium border-b border-gray-300">
                Preview
              </div>
              <div 
                className="flex-grow p-4 overflow-auto bg-white"
                dangerouslySetInnerHTML={{ __html: code }}
              />
            </div>
          </div>
          
          {result && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Kết quả kiểm tra:</h3>
              <div className="border border-gray-300 rounded-md overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 text-sm font-medium border-b border-gray-300">
                  Test Results
                </div>
                <div className="p-4 bg-white">
                  {result.error ? (
                    <p className="text-red-500 font-medium">{result.error}</p>
                  ) : (
                    <>
                      <div className="flex items-center mb-4">
                        <div className={`text-lg font-bold mr-2 ${result.score === result.maxScore ? 'text-green-600' : 'text-blue-600'}`}>
                          {result.score}/{result.maxScore} điểm
                        </div>
                        {result.score === result.maxScore && (
                          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Hoàn thành</span>
                        )}
                      </div>
                      <ul className="space-y-2">
                        {result.results.map((item, index) => (
                          <li 
                            key={index} 
                            className={`flex items-center p-2 rounded-md ${item.passed ? 'bg-green-50' : 'bg-red-50'}`}
                          >
                            <span className={`w-6 h-6 flex items-center justify-center rounded-full mr-2 ${item.passed ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                              {item.passed ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                              ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                              )}
                            </span>
                            <span className={`${item.passed ? 'text-green-800' : 'text-red-800'}`}>
                              {item.requirement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExerciseDetail; 