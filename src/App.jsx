import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import './App.css'
import ScrollTop from './components/ScrollTop'

function App() {
  
  return (
    <div className='whol'>
      <ScrollTop />
      <Header />
      <Home />
      <About />
      <Gallery />
      <Events />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
