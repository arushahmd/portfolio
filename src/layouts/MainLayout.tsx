import { HashRouter as Router, Routes, Route } from "react-router-dom"; // BrowserRouter
import Sidebar from "../components/Sidebar/index.tsx";
import Home from "../pages/Home/Home.tsx";
import Experience from "../pages/Experience/Experience.tsx";
import Projects from "../pages/Projects/Projects.tsx";
import AboutPage from "../pages/About/About.tsx";
import ContactPage from "../pages/Contact/ContactPage.tsx";
import ToolsPage from "../pages/Tools/ToolsPage.tsx";
import ScrollToTop from "../utils/ScrollToTop.tsx";

const MainLayout: React.FC = () => {
  return (
    <Router>
      <ScrollToTop selector="#main-content" behavior="auto" />
      <div className="grid grid-cols-[260px_1fr] h-screen w-screen bg-gray-50">
        {/* Sidebar (fixed height, elegant background) */}
        <aside
          className="h-full w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 
                     border-r border-gray-200 relative"
        >
          {/* Optional subtle AI background overlay */}
          <div className="absolute inset-0 bg-[url('/abstract-ai-bg.png')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>

          <div className="relative h-full flex flex-col">
            <Sidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main
          className="h-full overflow-y-auto p-6 mt-8"
          id="main-content" // bg-gradient-to-br from-gray-50 via-white to-gray-100
        >
          <div className="max-w-5xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/tools" element={<ToolsPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default MainLayout;
