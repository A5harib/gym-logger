import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Initialize Convex Client
// NOTE: You need to set VITE_CONVEX_URL in your .env.local file
// For now, if no URL is present, it will log a warning and run in a disconnected state or crash if ConvexProvider enforces it.
// To fix, run `npx convex dev` and get your deployment URL.
const convexUrl = import.meta.env.VITE_CONVEX_URL || "https://dummy-url.convex.cloud"; 
const convex = new ConvexReactClient(convexUrl);

function App() {
  return (
    // Wrap with ConvexProvider
    <ConvexProvider client={convex}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold">Features Page - Routing Working!</h1>
            </div>
          } />
        </Routes>
      </Router>
    </ConvexProvider>
  );
}

export default App;
