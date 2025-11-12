import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//components
import NavBar from './components/NavBar'
//pages
import Aboutpage from './pages/About'
import Homepage from './pages/Home'
import Favoritepage from './pages/Favorite'
import Singelpage from './pages/Singel'




function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <NavBar/>
      <div className='container'>
        <Routes>
          <Route exact path= "/" element={<Homepage />}/>
          <Route exact path= "/about" element={<Aboutpage />}/>
          <Route path= "/singleshow/:id" element={<Singelpage />}/>
          <Route exact path= "/favorite" element={<Favoritepage />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
