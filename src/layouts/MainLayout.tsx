import { HashRouter as Router, Routes, Route } from "react-router-dom"; // BrowserRouter
import Sidebar from "../components/Sidebar/index.tsx";
import Home from "../pages/Home/Home.tsx";
import Experience from "../pages/Experience/Experience.tsx";
import Projects from "../pages/Projects/Projects.tsx";
import AboutPage from "../pages/About/About.tsx";
import ContactPage from "../pages/Contact/ContactPage.tsx";
import ToolsPage from "../pages/Tools/ToolsPage.tsx";
import ScrollToTop from "../utils/ScrollToTop.tsx";
import SkillsPage from "../pages/Skills/SkillsPage.tsx";
import TopNav from "../components/TopNav/TopNav.tsx";

const MainLayout: React.FC = () => {
  return (
    <Router>
      <ScrollToTop selector="#main-content" behavior="auto" />
      <div className="h-screen w-screen bg-gray-50 flex flex-col md:grid md:grid-cols-[260px_1fr]">
        {/* Mobile top nav */}
        <div className="md:hidden">
          <TopNav />
        </div>

        {/* Sidebar - only visible on md and up */}
        <aside
          className="hidden md:flex h-full w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 
               border-r border-gray-200 relative"
        >
          {/* Subtle AI overlay */}
          <div className="absolute inset-0 bg-[url('/abstract-ai-bg.png')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>

          <div className="relative h-full flex flex-col">
            <Sidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main
          id="main-content"
          className={`
            overflow-y-auto
            max-w-5xl mx-auto w-full
            pt-15 md:pt-35
          `}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/tools" element={<ToolsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default MainLayout;
