import React from 'react';

const ShowDetailModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex justify-center items-center">
      <div className="relative bg-white w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg p-6 shadow-lg">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        {/* 콘텐츠 시작 */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={show.image?.medium || 'https://via.placeholder.com/210x295'}
            alt={show.name}
            className="w-[210px] h-auto object-cover rounded"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{show.name}</h2>

            <div
              className="text-sm text-gray-700 mb-3"
              dangerouslySetInnerHTML={{ __html: show.summary || '요약 정보 없음' }}
            />

            <div className="flex flex-wrap gap-2 mb-2">
              {show.genres?.map((g, i) => (
                <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded-full">#{g}</span>
              ))}
            </div>

            <p className="text-sm text-gray-600">
              <strong>상태:</strong> {show.status || '알 수 없음'}<br />
              <strong>공식 사이트:</strong>{' '}
              {show.officialSite ? (
                <a
                  href={show.officialSite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  링크
                </a>
              ) : (
                '없음'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetailModal;
