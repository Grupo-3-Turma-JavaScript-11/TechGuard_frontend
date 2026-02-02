import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
// import Login from './pages/login/Login'; // Exemplo de outra página

function App() {
  return (
    <Router> {/* O Router deve envolver tudo que usa Link ou rotas */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;