import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import NavBar from './ui/NavBar'
import Main from './pages/Main'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <div className="nk-main min-vh-100">
      <div className='full-page'>
        {/* <div className="nk-gap-2" /> */}

        <Router>
          <NavBar />

          {/* <div className="nk-gap-3" /> */}
          <div className='container'>
            <Routes>
              <Route path='*' element={<NotFoundPage />} />
              <Route path='/' element={<Main />} />
            </Routes>
          </div>

        </Router>

      </div>
    </div >
  )
}

export default App
