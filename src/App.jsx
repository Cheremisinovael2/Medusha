import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation'

import Home from './pages/home'
import Catalogue from './pages/catalogue'
import Honey from './pages/honey'
import Production from './pages/production'
import Contacts from './pages/contacts'

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/honey" element={<Honey />} />
        <Route path="/production" element={<Production />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App