import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/ui/NavBar'


function App() {

  return (
    <div className='bg-black min-h-screen'>

      <Router>
        <NavBar />
        <Routes>
          <Route path='*' />
          <Route path='/' />
        </Routes>
      </Router>

    </div>
  )
}

export default App
