import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const naviagate = useNavigate();

  return (
    <nav className="bg-primary text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src="/Dynamic-Engineering-Services/images/projects/logo.svg"
          alt="Dynamic Engineering Services"
          className="h-10 w-auto hover:cursor-pointer"
          onClick={() => naviagate("/")}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `pb-1 transition ${
                  isActive
                    ? "border-b-2 border-accent text-accent"
                    : "text-white hover:text-gray-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 ${
                    isActive ? "text-accent font-semibold" : "text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
