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
import Perfil from './pages/perfil/Perfil';
import DeletarPerfil from './pages/perfil/DeletarPerfil';
import EditarPerfil from './pages/perfil/editarPerfil';


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
							<Route path="/perfil" element={<Perfil />} />
							<Route path="/editarperfil" element={<EditarPerfil />} />
							<Route path="/deletarperfil" element={<DeletarPerfil />} />

							
						</Routes>
			
					<Footer />
				</BrowserRouter>
			</AuthProvider>
  </>
);
}

export default App
