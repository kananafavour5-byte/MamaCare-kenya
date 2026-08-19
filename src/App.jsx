import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import PageWrapper from './components/layout/PageWrapper.jsx'
import { useJourneyProfile } from './hooks/useJourneyProfile.js'

import HomePage from './pages/HomePage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import JourneyPage from './pages/JourneyPage.jsx'
import TrackPage from './pages/TrackPage.jsx'
import BabyTrackPage from './pages/BabyTrackPage.jsx'
import GuidePage from './pages/GuidePage.jsx'
import FindCarePage from './pages/FindCarePage.jsx'
import GetHelpPage from './pages/GetHelpPage.jsx'

/**
 * App — top-level layout (Navbar + Footer always visible) and route table.
 * The mother's profile (pregnant/postpartum + due/birth date) lives here,
 * one level above the router, so every page that needs it (Home,
 * Dashboard, Journey) can read it via props without duplicating state.
 */
export default function App() {
  const [profile, setProfile] = useJourneyProfile()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <PageWrapper className="flex-1 w-full">
        <Routes>
          <Route path="/" element={<HomePage profile={profile} onSetProfile={setProfile} />} />
          <Route path="/dashboard" element={<DashboardPage profile={profile} />} />
          <Route path="/track" element={<TrackPage />} />
          <Route path="/baby-track" element={<BabyTrackPage />} />
          <Route path="/journey" element={<JourneyPage profile={profile} />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/find-care" element={<FindCarePage />} />
          <Route path="/get-help" element={<GetHelpPage />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </div>
  )
}
