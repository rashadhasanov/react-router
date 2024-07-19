import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useState } from "react";
import Overlay from "../components/Overlay";

function RootLayout() {
  const [active, setActive] = useState(false);

  function NavToggle() {
    setActive(!active);
  }

  return (
    <div>
      <header>
        <nav>
          <h1>Router</h1>
          <div className={`navbar ${active ? "active-navbar" : ""}`}>
            <button onClick={NavToggle} className="close-navbar">
              <i className="fa-solid fa-x"></i>
            </button>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            <NavLink to="careers">Careers</NavLink>
          </div>
          <button onClick={NavToggle} className="open-navbar">
            <i className="fa-solid fa-bars"></i>
          </button>
        </nav>
        <Breadcrumbs />
        {active && <Overlay active={active} />}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
