import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import OldHomePage from './pages/OldHomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page is the default route */}
        <Route path="/" element={<LandingPage />} />
        {/* Original NexusAI marketing page kept at /nexus */}
        <Route path="/nexus" element={<OldHomePage />} />
        {/* Legacy route alias */}
        <Route path="/landing" element={<Navigate to="/" replace />} />
        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
