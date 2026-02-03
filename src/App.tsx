import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import ListaSeguros from './components/seguro/listaseguros/ListaSeguros';
import FormSeguro from './components/seguro/formseguro/FormSeguro';
import DeletarSeguro from './components/seguro/deletarseguro/DeletarSeguro';
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import { PrivateRoute } from './components/auth/PrivateRoute'
import Perfil from './pages/perfil/Perfil';
import DeletarPerfil from './pages/perfil/DeletarPerfil';
import EditarPerfil from './pages/perfil/EditarPerfil';


function App() {

	return (
		<>
			<AuthProvider>
				<ToastContainer />
				<BrowserRouter>
					<Navbar />
					<Routes>
						{/* ROTAS PÚBLICAS */}
						<Route path="/" element={<Login />} />
						<Route path="/login" element={<Login />} />
						<Route path="/cadastro" element={<Cadastro />} />
						<Route path="/home" element={<Home />} />
						<Route path="/sobrenos" element={<Sobre />} />

						{/* GRUPO 1: CLIENTE E CORRETOR                               */}
						<Route element={<PrivateRoute rolesPermitidas={['cliente', 'corretor']} />}>
							{/* <Route path="/meus-seguros" element={<ListaSegurosCliente />} />
							<Route path="/contratar/:id" element={<FormContratacao />} /> */}
						</Route>

						{/* GRUPO 2: EXCLUSIVO CORRETOR (ADMIN)                       */}
						<Route element={<PrivateRoute rolesPermitidas={['corretor']} />}>
							<Route path="/categorias" element={<ListaCategorias />} />
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
			
							{/* Gestão global */}
							{/* <Route path="/admin/seguros" element={<ListaSegurosAdmin />} /> */}
						</Route> {/* <--- E ESQUECEU ESSE AQUI TAMBÉM! */}
					</Routes>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App