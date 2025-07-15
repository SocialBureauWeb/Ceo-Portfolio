import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import ScrollTop from './components/ScrollTop'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <ScrollTop/>
      <Routes>        
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/projects" element={<Projects />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
