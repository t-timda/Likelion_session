import React from 'react';

const ShowDetailModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
        >
          &times;
        </button>

        <h1 className="text-2xl font-bold mb-4">{show.name}</h1>
        <img
          src={show.image?.original || 'https://via.placeholder.com/300x450'}
          alt={show.name}
          className="w-64 mb-4"
        />
        <div
          className="prose max-w-full"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />
        <p className="mt-4 text-sm text-gray-700">
          <strong>장르:</strong>{' '}
          {show.genres.map((g, i) => (
            <span key={i} className="mr-2">#{g}</span>
          ))}<br />
          <strong>상태:</strong> {show.status}<br />
          <strong>공식 사이트:</strong>{' '}
          {show.officialSite ? (
            <a href={show.officialSite} target="_blank" className="text-blue-500 underline">
              링크
            </a>
          ) : (
            '없음'
          )}
        </p>
      </div>
    </div>
  );
};

export default ShowDetailModal;
