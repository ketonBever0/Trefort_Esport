import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import NavBar from './components/ui/NavBar'
import Main from './components/pages/Main'

function App() {

  return (
    <div className='full-page min-vh-100'>
      <div className="nk-main">
        <div className="nk-gap-2" />
        <div className='container-fluid'>

          <Router>
            <NavBar />
            <Routes>
              <Route path='*' element={<Main />} />
              <Route path='/' element={<Main />} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  )
}

export default App
