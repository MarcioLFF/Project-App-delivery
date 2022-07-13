import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <div className="App">
      <Routes>

        <Route
          path="/login"
          element={
            <Login />
          }
        />

      </Routes>
    </div>
  );
}

export default App;
