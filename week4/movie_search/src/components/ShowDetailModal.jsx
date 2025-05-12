// src/components/ShowDetailModal.jsx
import React from 'react';

const ShowDetailModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 relative w-[90%] max-w-2xl shadow-xl">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        {/* 모달 콘텐츠 */}
        <h1 className="text-2xl font-bold mb-4">{show.name}</h1>
        <img
          src={show.image?.medium}
          alt={show.name}
          className="w-64 mb-4"
        />
        <div
          className="prose max-w-full"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />
        <p className="mt-4 text-sm">
          <strong>장르:</strong>{' '}
          {show.genres.map((g, i) => (
            <span key={i} className="mr-2">#{g}</span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ShowDetailModal;
