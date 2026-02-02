import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Sobre from './pages/sobre/Sobre';

function App() {

return(
  <>
  <AuthProvider>
				<ToastContainer />
				<BrowserRouter>
					<Navbar />

						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="/cadastro"	element={<Cadastro />}/>
							<Route path="/sobre" element={<Sobre/>}/>
							
						</Routes>
			
					<Footer />
				</BrowserRouter>
			</AuthProvider>
  </>
);
}

export default App
