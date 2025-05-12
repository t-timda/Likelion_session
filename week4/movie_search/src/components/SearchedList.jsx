import React from 'react';

const SearchedList = ({ history, onSelect }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="mt-3">
      <h3 className="text-sm font-semibold text-gray-700 mb-2">최근 검색어</h3>
      <div className="flex flex-wrap gap-2">
        {history.map((term, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(term)}
            className="text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200"
          >
            #{term}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchedList ;