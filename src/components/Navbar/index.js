import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./index.css";

const Navbar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <nav className="navbar-outer-container">
      <Link to="/" className="nav-logo">
        Shoppee
      </Link>

      {/* Hamburger Icon */}
      <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoMdClose size="2rem" /> : <GiHamburgerMenu size="2rem" />}
      </button>

      {/* Main Links */}
      <div className={`nav-links-container ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

        <div className="search-container">
          <input
            className="search-input"
            type="search"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearch}>
            <IoMdSearch size="1.4rem" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
