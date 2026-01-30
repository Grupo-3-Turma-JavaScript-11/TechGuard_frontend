import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';

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

						</Routes>
					</div>
					{/* <Footer /> */}
				</BrowserRouter>
			</AuthProvider>
       </>
     )
    }

export default App
