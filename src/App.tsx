import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListaSeguros from './components/seguro/listaseguros/ListaSeguros'
import DeletarSeguro from './components/seguro/deletarseguro/DeletarSeguro'
import FormSeguro from './components/seguro/formseguro/FormSeguro'

function App() {
 


return(
  <>
    <BrowserRouter>
      <Routes>
        
        <Route path='/seguros' element={<ListaSeguros />} />
        <Route path='/cadastrarseguro' element={<FormSeguro />} />
        <Route path='/editarseguro' element={<FormSeguro />} />
        <Route path='/deletarseguro' element={<DeletarSeguro />} />
      </Routes>
  </BrowserRouter>
  
  </>
)
}

export default App
