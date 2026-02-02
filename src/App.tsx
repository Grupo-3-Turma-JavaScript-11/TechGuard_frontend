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
							<Route path="/categorias" element={<ListaCategorias/>} />
							<Route path="/cadastrarcategoria" element={<FormCategoria />} />
							<Route path="/editarcategoria/:id" element={<FormCategoria />} />
							<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path="/seguros" element={<ListaSeguros />} />
              <Route path="/cadastrarseguro" element={<FormSeguro />} />
              <Route path="/editarseguro/:id" element={<FormSeguro />} />
              <Route path="/deletarseguro/:id" element={<DeletarSeguro />} />
						</Routes>
			
					<Footer />
				</BrowserRouter>
			</AuthProvider>
  </>
);
}

export default App