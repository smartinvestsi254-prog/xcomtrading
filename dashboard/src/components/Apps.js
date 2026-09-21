import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Apps from './components/Apps';
// Import your other components here (e.g., Holdings, Positions, Orders)

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Navigation Header / Sidebar */}
        <nav style={{ padding: '10px', display: 'flex', gap: '15px' }}>
          <Link to="/">Dashboard</Link>
          <Link to="/apps">Apps</Link>
          <Link to="/holdings">Holdings</Link>
          <Link to="/positions">Positions</Link>
        </nav>

        {/* Route Definitions */}
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<h2>Welcome to Dashboard</h2>} />
            <Route path="/apps" element={<Apps />} />
            {/* Add additional routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
