import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './contexts/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {
 


return(
  <>
  <AuthProvider>
				<ToastContainer />
				<BrowserRouter>
					{/* <Navbar /> */}

						<Routes>
							{/* <Route path="/" element={<Home />} /> */}
							<Route path="/login" element={<Login />} />
							<Route path="/cadastro"	element={<Cadastro />}/>
						</Routes>
			
					{/* <Footer /> */}
				</BrowserRouter>
			</AuthProvider>
  </>
)
}

export default App
