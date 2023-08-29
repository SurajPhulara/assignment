import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Assessment from './pages/Assessment/Assessment';
import NavigationPanel from './components/NavigationPanel/NavigationPanel';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <NavigationPanel />
        <Routes>
          <Route path="*" element={<Assessment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
