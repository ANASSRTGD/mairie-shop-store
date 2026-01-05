import { useState } from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

    return (
        <div>
              <NavBar setCurrentPage={setCurrentPage} />

                    {currentPage === 'home' && <Home />}
                          {currentPage === 'shop' && <Shop />}
                                {currentPage === 'about' && <About />}
                                      {currentPage === 'contact' && <Contact />}

                                            <Footer />
                                                </div>
                                                  )
                                                  }

                                                  export default App