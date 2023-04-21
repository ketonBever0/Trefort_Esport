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
import OfflinePage from './pages/OfflinePage'
import SubmitOrganisation1 from './pages/SubmitOrganisation1'
import SubmitOrganisation2 from './pages/SubmitOrganisation2'
import Button2 from './ui/Button2'
import Button from './ui/Button'
import Register2 from './pages/Register2'
import Register1 from './pages/Register1'
import EditEvent from './pages/EditEvent'
import Events from './pages/Events'
import Elements from './pages/Elements'
import ProfilePage from './pages/ProfilePage'
import MyProfile from './pages/MyProfile'

function App() {

  return (
    <div className='full-page min-vh-100'>

      <BlogArticleProvider>
        <UserProvider>

          <div className="nk-main">


            <Router>
              <NavBar />
              <div className="nk-gap-6" />
              <div className="nk-gap-4" />
              <div className='container'>
                <Routes>
                  <Route path='*' element={<NotFoundPage />} />
                  <Route path='/' element={<Main />} />

                  <Route path='/profile/:id' element={<ProfilePage />} />

                  <Route path='/news' element={<BlogArticles />} />
                  <Route path='/post/:id' element={<BlogArticlePage />} />

                  <Route path='/tournaments' element={<Tournaments />} >
                    <Route path='/tournaments/latest' />
                    <Route path='/tournaments/upcoming' />

                  </Route>
                  <Route path='/offline' element={<OfflinePage />} />
                  <Route path='/event' element={<Events />} />
                  <Route path='/editevent' element={<EditEvent />} />
                  <Route path='/register1' element={<Register1 />} />
                  <Route path='/register2' element={<Register2 />} />
                  <Route path='/btn' element={<Button />} />
                  <Route path='/btn2' element={<Button2 />} />
                  <Route path='/submitorg1' element={<SubmitOrganisation1 />} />
                  <Route path='/submitorg2' element={<SubmitOrganisation2 />} />
                  <Route path='/elements' element={<Elements />} />
                  <Route path='/myprofile' element={<MyProfile />} />


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
