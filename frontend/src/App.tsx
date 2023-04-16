import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import NavBar from './ui/NavBar'
import Main from './pages/Main'
import NotFoundPage from './pages/NotFoundPage'
import BlogArticles from './pages/BlogArticles'
import { BlogArticleProvider } from './_context/BlogArticleContext'
import BlogArticlePage from './pages/BlogArticlePage'
import Tournaments from './pages/Tournaments'
import { UserProvider } from './_context/UserContext'

function App() {

  return (
    <div className='full-page min-vh-100'>

      <BlogArticleProvider>
        <UserProvider>

          <div className="nk-main">
            <div className="nk-gap-2" />

            <Router>
              <NavBar />
              <div className='container'>
                <Routes>
                  <Route path='*' element={<NotFoundPage />} />
                  <Route path='/' element={<Main />} />
                  <Route path='/news' element={<BlogArticles />} />
                  <Route path='/post/:id' element={<BlogArticlePage />} />

                  <Route path='/tournaments' element={<Tournaments />} >
                    <Route path='/tournaments/latest' />
                    <Route path='/tournaments/upcoming' />

                  </Route>

                </Routes>
              </div>
            </Router>

          </div>

        </UserProvider>
      </BlogArticleProvider>

    </div >
  )
}

export default App
