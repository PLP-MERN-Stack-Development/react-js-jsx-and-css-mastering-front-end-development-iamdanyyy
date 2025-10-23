import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import ApiData from './components/ApiData';
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/api-data" element={<ApiData />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 