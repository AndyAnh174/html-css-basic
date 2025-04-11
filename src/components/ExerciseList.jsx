import { useState } from 'react';
import exercisesData from '../data/exercises.json';

function ExerciseList({ onSelectExercise }) {
  return (
    <div>
      <div className="grid gap-4">
        {exercisesData.map(exercise => (
          <div 
            key={exercise.id}
            className="border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div 
              onClick={() => onSelectExercise(exercise)}
              className="bg-gray-50 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-blue-600">{exercise.title}</h3>
                <span className="text-xs font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Dễ
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{exercise.description}</p>
              
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
                  <span className="w-2 h-2 mr-1 bg-blue-400 rounded-full"></span>
                  HTML
                </span>
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
                  <span className="w-2 h-2 mr-1 bg-purple-400 rounded-full"></span>
                  CSS
                </span>
              </div>
            </div>
            <div className="px-4 py-2 bg-white flex justify-between items-center border-t border-gray-200">
              <div className="text-xs text-gray-500">
                Thời gian làm: 5 phút
              </div>
              <button
                onClick={() => onSelectExercise(exercise)}
                className="text-sm text-blue-600 font-medium hover:text-blue-800"
              >
                Làm bài →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExerciseList; 