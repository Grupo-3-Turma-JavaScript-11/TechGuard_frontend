import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListaSeguros from './components/seguro/listaseguros/ListaSeguros'

function App() {
 


return(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/seguros' element={<ListaSeguros />} />
      </Routes>
  </BrowserRouter>
  
  </>
)
}

export default App
