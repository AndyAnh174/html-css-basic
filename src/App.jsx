import { useState } from "react";
import ExerciseList from "./components/ExerciseList";
import ExerciseDetail from "./components/ExerciseDetail";

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [currentTab, setCurrentTab] = useState("html-css");

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleGoBack = () => {
    setSelectedExercise(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 via-white to-purple-200 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2"></div>
          <nav className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-all duration-200"
            >
              Học tập
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition-all duration-200"
            >
              Thử thách
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-indigo-800 mb-3 tracking-tight drop-shadow">
            🚀 Khám phá Thử Thách HTML/CSS
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cải thiện kỹ năng lập trình qua các bài tập thực chiến được thiết kế
            sinh động và đầy cảm hứng.
          </p>
        </div>

        {/* Bài tập */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300">
          {selectedExercise ? (
            <ExerciseDetail
              exercise={selectedExercise}
              onGoBack={handleGoBack}
            />
          ) : (
            <>
              {/* Tabs */}
              <div className="bg-gray-100 border-b px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <button
                    className={`py-4 text-lg font-semibold transition-all duration-200 ${
                      currentTab === "html-css"
                        ? "bg-white text-indigo-600 border-b-4 border-indigo-500 shadow-inner"
                        : "text-gray-500 hover:text-indigo-500"
                    }`}
                    onClick={() => setCurrentTab("html-css")}
                  >
                    HTML/CSS
                  </button>

                  <button
                    className="py-4 text-lg font-semibold text-gray-400 cursor-not-allowed"
                    disabled
                  >
                    Sắp ra mắt
                  </button>
                </div>
              </div>

              {/* Bộ lọc + danh sách */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    📚 Chọn Bài tập
                  </h2>
                  <div className="relative w-full md:w-64">
                    <select className="block w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none">
                      <option>Tất cả bài tập</option>
                      <option>Bài tập cơ bản</option>
                      <option>Bài tập nâng cao</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Danh sách bài tập */}
                <ExerciseList onSelectExercise={handleSelectExercise} />
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white text-sm text-center py-6 mt-12 shadow-inner backdrop-blur-md">
        <p className="opacity-90 tracking-wide">
          &copy; 2024 CodeGalaxy • Học HTML/CSS qua thực hành sáng tạo & thử
          thách 🌌
        </p>
      </footer>
    </div>
  );
}

export default App;
