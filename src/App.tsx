import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contacts from './pages/Contacts';
import ArtGallery from './pages/Gallery';
import NotFoundPage from './pages/NotFound';
import MainLayout from './layout/MainLayout';
import MinimalLayout from './layout/MinimalLayout';
import ComingSoon from './pages/ComingSoon';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

function App() {

  return (
    <>
      <Routes>
        <Route
          path='/coming-soon'
          element={<ComingSoon/>}/>
        <Route element={<MainLayout />}>
        
        <Route
            path='/'
            element={<HomePage/>}/>
          <Route
            path='/about'
            element={<About />} />
          <Route
            path='/contacts'
            element={<Contacts />} />
          <Route
            path='/art-gallery'
            element={<ArtGallery />} />
            <Route
            path='/privacy-policy'
            element={<PrivacyPolicy/>}/>
            <Route
            path='/cookie-policy'
            element={<CookiePolicy/>}/>
        </Route>
        <Route element={<MinimalLayout />}>
          <Route
            path='*'
            element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
