import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Housing from './pages/housing/Housing'
import About from './pages/about/About'
import Header from './components/Header/header'
import Error from './components/Error/error'
import Footer from './components/Footer/footer'

 
ReactDOM.createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)