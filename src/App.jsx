import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Journals from "./pages/Journals"
import Contact from "./pages/Contact"
import Members from "./pages/Members"
import Programs from "./pages/Programs"
import "./styles/global.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/journals" element={<Journals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Programs" element={<Programs />} />
            <Route path="/Members" element={<Members />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
