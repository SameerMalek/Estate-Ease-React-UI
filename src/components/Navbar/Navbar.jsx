import { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { userData } from "../../lib/dummydata";
function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>EstateEase</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img src={userData.img} alt="profileImage" />
            <span>{userData.name}</span>
            <Link to="/profile" className="profileTitle">
              <div className="notification">3</div>
                <span>
                  Profile
                </span>
            </Link>
          </div>
        ) : (
          <>
            (<Link to="/">Sign in</Link>
            <Link to="/" className="register">
              Sign up
            </Link>
            )
          </>
        )}
        <div className="menuIcon">
          <img src="/menu.png" alt="menu" onClick={() => setOpen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
          <Link to="/">Sign in</Link>
          <Link to="/">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
