import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/man.jpeg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isAdminLogged = !!localStorage.getItem("adminToken");

  const logoutHandler = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">

        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Mangilal Construction and Manpower Services company logo"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="text-sm md:text-lg font-extrabold text-blue-900 leading-tight">
            Mangilal Construction<br />
            <span className="text-blue-700">Manpower & Civil Contractor</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden md:flex gap-6 font-medium items-center">
          {["home", "about", "services", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-blue-700 transition text-gray-900"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* 🔐 ADMIN ONLY */}
          {isAdminLogged && (
            <>
              <Link to="/admin/dashboard" className="text-blue-700 hover:underline">
                Dashboard
              </Link>
              <button
                onClick={logoutHandler}
                className="text-red-600 hover:underline ml-3"
              >
                Logout
              </button>
            </>
          )}
        </nav>

        {/* Call CTA */}
        <a
          href="tel:+919873107857"
          aria-label="Call Mangilal Construction manpower services"
          className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Call for Manpower
        </a>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl md:hidden text-blue-900"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white flex flex-col px-6 py-4 space-y-4 shadow-lg border-t">
          {["home", "about", "services", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="text-gray-900 hover:text-blue-700"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          {/* 🔐 ADMIN ONLY */}
          {isAdminLogged && (
            <>
              <Link
                to="/admin/dashboard"
                onClick={() => setMenuOpen(false)}
                className="text-blue-700"
              >
                Dashboard
              </Link>
              <button onClick={logoutHandler} className="text-red-600 text-left">
                Logout
              </button>
            </>
          )}

          <a
            href="tel:+919873107857"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-center shadow"
          >
            Call for Manpower
          </a>
        </div>
      )}
    </header>
  );
}
