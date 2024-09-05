import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      
      <Route path="/" element={<Main />} />
      
    </Routes>
  </Router>

  );
}

export default App;
