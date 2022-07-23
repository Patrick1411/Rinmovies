import { BrowserRouter as Router } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import './App.scss'
import './assets/boxicons/css/boxicons.min.css'
import { Header, Footer } from './components'
import ThreeMainRoutes from './config/ThreeMainRoutes'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <>
          <Header />
          <ThreeMainRoutes />
          <Footer />
        </> 
      </Router>
    </HelmetProvider>
  )
}

export default App
