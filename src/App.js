import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
    </>
  );
}

export default App;
