
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
						</Routes>
			
					<Footer />
				</BrowserRouter>
			</AuthProvider>
  </>
);
>>>>>>> b004c67750fa242f87326ba135ddcb7eca831685
}

export default App;