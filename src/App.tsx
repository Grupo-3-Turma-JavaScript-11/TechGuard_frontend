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
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import ListaSeguros from './components/seguro/listaseguros/ListaSeguros';
import FormSeguro from './components/seguro/formseguro/FormSeguro';
import DeletarSeguro from './components/seguro/deletarseguro/DeletarSeguro';
import Sobre from './pages/sobre/Sobre';
import Perfil from './pages/perfil/Perfil';
import DeletarPerfil from './pages/perfil/DeletarPerfil';
import EditarPerfil from './pages/perfil/EditarPerfil';


function App() {

return(
  <>
  <AuthProvider>
				<ToastContainer />
				<BrowserRouter>
					<Navbar />

						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/home" element={<Home />} />
							<Route path="/cadastro"	element={<Cadastro />}/>
							<Route path="/categorias" element={<ListaCategorias/>} />
							<Route path="/cadastrarcategoria" element={<FormCategoria />} />
							<Route path="/editarcategoria/:id" element={<FormCategoria />} />
							<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
							<Route path="/seguros" element={<ListaSeguros />} />
							<Route path="/cadastrarseguro" element={<FormSeguro />} />
							<Route path="/editarseguro/:id" element={<FormSeguro />} />
							<Route path="/deletarseguro/:id" element={<DeletarSeguro />} />
							<Route path="/sobrenos" element={<Sobre />} />
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