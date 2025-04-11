import { useState } from 'react'
import ExerciseList from './components/ExerciseList'
import ExerciseDetail from './components/ExerciseDetail'

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [currentTab, setCurrentTab] = useState('html-css');

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleGoBack = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white shadow-md py-3 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-blue-500 font-bold text-2xl mr-2">DSC</div>
            <div className="font-bold text-xl">HCMUTE</div>
            <div className="ml-2 text-gray-400 text-sm">Diễn đàn Thuật toán</div>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Học tập</a>
            <a href="#" className="bg-gray-800 text-white px-3 py-2 rounded-md">Thử thách</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Thử thách HTML/CSS</h1>
          <p className="text-gray-400">
            Luyện tập các bài tập HTML/CSS và nhận phản hồi ngay lập tức!
          </p>
        </div>

        <div className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden">
          {selectedExercise ? (
            <ExerciseDetail 
              exercise={selectedExercise} 
              onGoBack={handleGoBack} 
            />
          ) : (
            <>
              <div className="bg-gray-100 border-b">
                <div className="flex">
                  <button 
                    className={`px-6 py-3 font-medium ${currentTab === 'html-css' ? 'bg-white' : 'bg-gray-100 text-gray-600'}`}
                    onClick={() => setCurrentTab('html-css')}
                  >
                    HTML/CSS
                  </button>
                  <button 
                    className={`px-6 py-3 font-medium ${currentTab === 'javascript' ? 'bg-white' : 'bg-gray-100 text-gray-600'}`}
                    onClick={() => setCurrentTab('javascript')}
                  >
                    JavaScript
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4 flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Chọn Bài tập:</h2>
                  <div className="relative">
                    <select className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500">
                      <option>Tất cả bài tập</option>
                      <option>Bài tập cơ bản</option>
                      <option>Bài tập nâng cao</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <ExerciseList onSelectExercise={handleSelectExercise} />
              </div>
            </>
          )}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-4 text-center text-sm">
        <p>&copy; 2024 DSC HCMUTE - Học HTML/CSS thông qua thực hành</p>
      </footer>
    </div>
  )
}

export default App
