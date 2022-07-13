import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ Login } />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
