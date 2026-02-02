import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListaSeguros from './components/seguro/listaseguros/ListaSeguros'
import DeletarSeguro from './components/seguro/deletarseguro/DeletarSeguro'
import FormSeguro from './components/seguro/formseguro/FormSeguro'
import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'


function App() {
  return(
    <>
     <AuthProvider>
			  <ToastContainer/>
			  <BrowserRouter>
				  <Navbar /> 
				    <div className="min-h-[80vh]">
					  <Routes>
              <Route path="/home" element={<Home />} />
							<Route path="/" element={<Login />} />
							<Route path="/cadastro"	element={<Cadastro />}/>
						  <Route path="/categorias" element={<ListaCategorias/>} />
						  <Route path="/cadastrarcategoria" element={<FormCategoria />} />
						  <Route path="/editarcategoria/:id" element={<FormCategoria />} />
						  <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              <Route path='/seguros' element={<ListaSeguros />} />
              <Route path='/cadastrarseguro' element={<FormSeguro />} />
              <Route path='/editarseguro/:id' element={<FormSeguro />} />
              <Route path='/deletarseguro/:id' element={<DeletarSeguro />} />
            </Routes>
            </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App