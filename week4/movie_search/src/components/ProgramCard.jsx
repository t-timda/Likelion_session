// src/components/ProgramCard.jsx
import React from 'react';

const ProgramCard = ({ programs, onCardClick }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {programs.map((item) => {
        const { show } = item; // 이 구조 분해 필수!

        return (
          <div
            key={show.id}
            onClick={() => {
              console.log('카드 클릭됨:', show.id); // 디버깅
              onCardClick(show.id);
            }}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
          >
            <img
              src={show.image?.medium || 'https://via.placeholder.com/210x295'}
              alt={show.name}
              className="w-full h-[295px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{show.name}</h2>
              <div className="flex flex-wrap gap-2">
                {show.genres.map((genre, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                  >
                    #{genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProgramCard;
