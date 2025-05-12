import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import ShowDetail from './pages/ShowDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/shows/:id" element={<ShowDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
