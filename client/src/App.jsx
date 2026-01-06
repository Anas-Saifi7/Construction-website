import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";

// Website Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import StatsStrip from "./components/StatsStrip";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

// Admin Components
import AdminLogin from "./admin/AdminLogin";
import Enquiries from "./admin/Enquiries";
import AdminDashboard from "./admin/AdminDashboard";

/* ================= Protected Route ================= */
const Protected = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" replace />;
};

/* ================= Website UI ================= */
function WebsiteUI() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="pt-20">
        <section id="home" className="scroll-mt-24"><Hero /></section>
        <section id="about" className="scroll-mt-24"><About /></section>
        <section id="services" className="scroll-mt-24"><Services /></section>
        <div className="scroll-mt-24"><StatsStrip /></div>
        <section id="projects" className="scroll-mt-24"><Projects /></section>
        <section id="contact" className="scroll-mt-24"><Contact /></section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ================= App ================= */
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>

          {/* Website */}
          <Route path="/" element={<WebsiteUI />} />

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Dashboard (Protected) */}
          <Route
            path="/admin/dashboard"
            element={
              <Protected>
                <AdminDashboard />
              </Protected>
            }
          />

          {/* Admin Enquiries (Protected) */}
          <Route
            path="/admin/enquiries"
            element={
              <Protected>
                <Enquiries />
              </Protected>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
