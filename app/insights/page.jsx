"use client";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from '../components/blog/BlogList';
import BlogDetail from '../components/blog/BlogDetail';  // Import BlogDetail component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/insights" element={<BlogList />} />
        <Route path="/insights/:slug" element={<BlogDetail />} />  {/* Route for individual blog */}
      </Routes>
    </Router>
  );
}

export default App;
