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
import Register2 from './pages/Register2'
import Register1 from './pages/Register1'
import EditEvent from './pages/EditEvent'
import Events from './pages/Events'
import EventPage from './pages/EventPage'
import Elements from './pages/Elements'
import ProfilePage from './pages/ProfilePage'
import MyProfile from './pages/MyProfile'
import { EventProvider } from './_context/EventContext'
import OnRouting from './ui/notRendered/OnRouting'
import { Toaster } from 'react-hot-toast'
import Test from './pages/ReviewOrganisations'
import ReviewOrganisations from './pages/ReviewOrganisations'
import { useEffect } from 'react'
import AddClan from './pages/AddClan'
import ClanProfile from './pages/ClanProfile'
import Users from './pages/Users'
import AddEvent from './pages/AddEvent'
import OrganisationProfile from './pages/OrganisationProfile'
import Clans from './pages/Clans'
import Footer from './ui/Footer'
import ApprovalModal from './pages/AddClanApprovalModal'
import JoinClanApprovalModal from './pages/JoinClanApprovalModal'
import AddClanApprovalModal from './pages/AddClanApprovalModal'
import { CompetitionProvider } from './_context/CompetitionContext'
import CompetitionRegister from './pages/CompetitionRegister'
import { SessionTeamProvider } from './_context/SessionTeamContext'
import CreateSessionTeam from './pages/CreateSessionTeam'
import AddCompetitions from './pages/AddCompetitions'
import { ClanProvider } from './_context/ClanContext'
import { OrganisationProvider } from './_context/OrganisationContext'
import OrganisationsList from './pages/OrganisationsList'

function App() {

  return (
    <div className='full-page min-vh-100'>
      <Toaster />

      <EventProvider>
        <CompetitionProvider>
          <SessionTeamProvider>
            <ClanProvider>
              <BlogArticleProvider>
                <UserProvider>
                  <OrganisationProvider>

                    <div className="nk-main">
                      <Router>
                        <NavBar />
                        {/* <div className="nk-gap-6" /> */}
                        {/* <div id='fillitsplace' style={{ height: "70px" }} /> */}
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

                            <Route path='/addcompetitions/:id' element={<AddCompetitions />} />


                            <Route path='/events' element={<Events />} />
                            <Route path='/events/:id' element={<EventPage />} />
                            <Route path='/events/:id/register/:competitionid' element={<CompetitionRegister />} />
                            <Route path='/events/:id/register/:competitionid/create' element={<CreateSessionTeam />} />

                            <Route path='/offline' element={<OfflinePage />} />
                            <Route path='/editevent' element={<EditEvent />} />
                            <Route path='/addevent' element={<AddEvent />} />


                            <Route path='/register1' element={<Register1 />} />
                            <Route path='/register2' element={<Register2 />} />


                            {/* <Route path='/btn2' element={<Button2 />} /> */}


                            <Route path='/submitorg' element={<SubmitOrganisation1 />} />
                            <Route path='/submitorg2' element={<SubmitOrganisation2 />} />


                            <Route path='/elements' element={<Elements />} />
                            <Route path='/myprofile' element={<MyProfile />} />
                            <Route path='/test' element={<Test />} />
                            <Route path='/revieworg' element={<ReviewOrganisations />} />
                            <Route path='/addclan' element={<AddClan />} />
                            <Route path='/clanprofile/:id' element={<ClanProfile />} />
                            <Route path='/organisationprofile' element={<OrganisationProfile />} />
                            <Route path='/organisationslist' element={<OrganisationsList />} />
                            <Route path='/users' element={<Users />} />
                            <Route path='/clans' element={<Clans />} />
                            <Route path='/addclanapproval' element={<AddClanApprovalModal />} />
                            <Route path='/joinclanapproval' element={<JoinClanApprovalModal />} />
                            <Route path='/footer' element={<Footer />} />


                          </Routes>
                        </div>
                        <div className='nk-gap-6' />
                        <Footer />
                        <OnRouting />
                      </Router>

                    </div>
                  </OrganisationProvider>
                </UserProvider>
              </BlogArticleProvider>
            </ClanProvider>
          </SessionTeamProvider>
        </CompetitionProvider>
      </EventProvider>


    </div >
  )
}

export default App
