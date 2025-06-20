import React from 'react';
import {createRoot} from 'react-dom/client';
import LandingPage from './Pages/LandingPage.js';
import PoemPage from './Pages/PoemPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = createRoot(document.getElementById("root"));

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/poems" element={<PoemPage />} />
        </Routes>
      </div>
    </Router>
  );
}

root.render(<App/>);
