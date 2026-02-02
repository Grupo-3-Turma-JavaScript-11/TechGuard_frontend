import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import ListaSeguros from './components/seguro/listaseguros/ListaSeguros'
import DeletarSeguro from './components/seguro/deletarseguro/DeletarSeguro'
import FormSeguro from './components/seguro/formseguro/FormSeguro'
import { AuthProvider } from './contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';


function App() {
  return(
    <>
     <AuthProvider>
			  <ToastContainer/>
			  <BrowserRouter>
				  {/* <Navbar />  */}
				    <div className="min-h-[80vh]">
					  <Routes>
						
						  {/* <Route path="/cadastro"	element={<Cadastro />}/> */}
          	  <Route path="/" element={<ListaCategorias />} />
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
        </BrowserRouter>
      </AuthProvider>
    </>
  )
=======
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {

return(
  <>
  <Navbar />
  <Home />
  <Footer />
  </>
);
>>>>>>> 418bb9dc1760b58e781f40c91da16a36fca99ae0
}

export default App
