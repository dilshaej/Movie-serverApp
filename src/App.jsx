import { Route, Routes } from 'react-router-dom'
import './App.css'

import LandingPage from './pages/LandingPage'
import Movie from './pages/Movie'
import Series from './pages/Series'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>

    <Route path='/'  element={<LandingPage/>} /> {/* base url of the application */}
      <Route path='/movie'  element={<Movie/>} />
      
      <Route path='/series' element={<Series/>}/>
     


    </Routes>
    <Footer/>
    </>
  )
}

export default App
