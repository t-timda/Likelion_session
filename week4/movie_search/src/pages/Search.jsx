import React, { useState, useEffect } from 'react';
import ProgramCard from '../components/ProgramCard';
import SearchedList from '../components/SearchedList';
import ShowDetailModal from '../components/ShowDetailModal';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  // ✅ 로컬 스토리지 불러오기
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(saved);
  }, []);

  // ✅ 검색 실행
  const handleSearch = async (q = query) => {
    if (!q) return;
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${q}`);
      const data = await res.json();
      setResults(data);
      setSearched(true);
      updateSearchHistory(q);
    } catch (err) {
      console.error('API 호출 실패:', err);
    }
  };

  // ✅ 검색 기록 갱신
  const updateSearchHistory = (term) => {
    let updated = [term, ...searchHistory.filter((item) => item !== term)];
    if (updated.length > 5) updated = updated.slice(0, 5);
    setSearchHistory(updated);
    localStorage.setItem('searchHistory', JSON.stringify(updated));
  };

  // ✅ Enter 키 처리
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // ✅ 카드 클릭 시 상세 정보 요청
  const fetchShowDetail = async (id) => {
    try {
      const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await res.json();
      setSelectedShow(data);
    } catch (err) {
      console.error('상세 정보 요청 실패:', err);
    }
  };

  return (
    <>
      {/* ✅ 이 div는 기본 콘텐츠 */}
      <div className="p-4 max-w-4xl mx-auto">
        {/* 검색창 */}
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border border-gray-300 p-2 rounded"
            placeholder="프로그램 이름을 입력하세요"
          />
          <button
            onClick={() => handleSearch()}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            검색
          </button>
        </div>

        {/* 검색 기록 */}
        <SearchedList
          history={searchHistory}
          onSelect={(term) => {
            setQuery(term);
            handleSearch(term);
          }}
        />

        {/* 검색 결과 없음 메시지 */}
        {searched && results.length === 0 && (
          <div className="mt-8 text-center text-gray-500 text-lg">
            검색 결과가 없습니다.
          </div>
        )}

        {/* 검색 결과 카드 */}
        {results.length > 0 && (
          <ProgramCard programs={results} onCardClick={fetchShowDetail} />
        )}
      </div>

      {/* ✅ 이건 반드시 div 바깥에 있어야 모달이 fixed로 뜸 */}
      {selectedShow && (
      <ShowDetailModal
        show={selectedShow}
        onClose={() => setSelectedShow(null)}
      />
      )}
    </>
  );
};

export default Search;
