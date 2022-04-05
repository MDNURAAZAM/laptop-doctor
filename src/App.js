import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/Dashboard/Dashboard";
import Blogs from "./components/Blogs/Blogs";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <nav>
        <div className="link-container">
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/reviews"
          >
            REVIEWS
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/dashboard"
          >
            DASHBOARD
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active-link" : "link")}
            to="/blogs"
          >
            BLOG
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
