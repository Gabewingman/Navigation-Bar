import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import About from './pages/About'
import NoPage from './pages/NoPage'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/NoPage' element={<NoPage />} />
      </Routes>
    </>
  )
}

export default App
