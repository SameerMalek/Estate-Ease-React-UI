import { useContext, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { userData } from "../../lib/dummydata";
import { AuthContext } from "../../context/AuthContext";
import { useNotificationStore } from './../../lib/notificationStore';
function Navbar() {
  const [open, setOpen] = useState(false);
  const {currentUser}=useContext(AuthContext)
  const fetch = useNotificationStore((state)=>state.fetch);
  const number = useNotificationStore((state)=>state.number);
  fetch();
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>EstateEase</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/list">Property Listings</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.png"} alt="profileImage" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profileTitle">
           { number>0 &&  <div className="notification">{number}</div>}
                <span>
                  Profile
                </span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign in</Link>
            <Link to="/register" className="register">Sign up</Link>
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
