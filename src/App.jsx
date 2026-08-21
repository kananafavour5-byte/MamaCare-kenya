import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import PageWrapper from './components/layout/PageWrapper.jsx'
import FirstTrimesterPage from './pages/FirstTrimesterPage.jsx'
import SecondTrimesterPage from './pages/SecondTrimesterPage.jsx'
import ThirdTrimesterPage from './pages/ThirdTrimesterPage.jsx'
import AntenatalCarePage from './pages/AntenatalCarePage.jsx'
import TestsScansPage from './pages/TestsScansPage.jsx'
import HealthyPregnancyPage from './pages/HealthyPregnancyPage.jsx'
import PreparingForBirthPage from './pages/PreparingForBirthPage.jsx'
import LaborBirthPage from './pages/LaborBirthPage.jsx'
import { useJourneyProfile } from './hooks/useJourneyProfile.js'


import HomePage from './pages/HomePage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import JourneyPage from './pages/JourneyPage.jsx'
import TrackPage from './pages/TrackPage.jsx'
import BabyTrackPage from './pages/BabyTrackPage.jsx'
import GuidePage from './pages/GuidePage.jsx'
import FindCarePage from './pages/FindCarePage.jsx'
import GetHelpPage from './pages/GetHelpPage.jsx'
import GuideTopicPage from './pages/GuideTopicPage.jsx'

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
          <Route
  path="/journey/first-trimester"
  element={<FirstTrimesterPage />}
/>
          <Route
  path="/journey/second-trimester"
  element={<SecondTrimesterPage />}
/>
          <Route
  path="/journey/third-trimester"
  element={<ThirdTrimesterPage />}
/>

<Route
  path="/journey/antenatal-care"
  element={<AntenatalCarePage />}
/>        
          <Route
  path="/journey/tests-scans"
  element={<TestsScansPage />}
/>

<Route
  path="/journey/healthy-pregnancy"
  element={<HealthyPregnancyPage />}
/>

<Route
  path="/journey/preparing-for-birth"
  element={<PreparingForBirthPage />}
/>

<Route
  path="/journey/labor-birth"
  element={<LaborBirthPage />}
/>
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/guide/:categoryId" element={<GuideTopicPage />} />
          <Route path="/find-care" element={<FindCarePage />} />
          <Route path="/get-help" element={<GetHelpPage />} />
        </Routes>
      </PageWrapper>
      <Footer />
    </div>
  )
}
