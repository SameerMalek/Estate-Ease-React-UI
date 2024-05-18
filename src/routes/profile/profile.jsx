import React, { useContext } from 'react'
import "./profile.scss";
import { userData } from '../../lib/dummydata';
import List from '../../components/list/list';
import Chat from '../../components/chat/chat';
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from './../../context/AuthContext';

export default function Profile() {
    const {updateUser,currentUser}=useContext(AuthContext);
    const navigate =useNavigate();
    const handleLogout =async()=>{
        try{
            await apiRequest.post("/auth/logout");
            updateUser(null)
            navigate("/");
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className='profile'>
     <div className="details">
        <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <Link to="/profile/update" className='button'>Update Profile</Link>
                {/* <button component={Link} to='../profileUpdatePagePage/profileUpdatePagePage.jsx'></button> */}
            </div>
            <div className="info">
                <span><b>Avatar:</b> <img src={currentUser.avatar || "noavatar.png"} alt="userImg" /></span>
                <span><b>Username:</b> {currentUser.username}</span>
                <span><b>Email:</b> {currentUser.email}</span>
                <button onClick={handleLogout}>Log out</button>
            </div>
            <div className="title">
                <h1>My List</h1>
                <button>Create New Post</button>
            </div>
            <List/>
            <div className="title">
                <h1>Saved List</h1>
            </div>
            <List/>
        </div>
     </div>
     <div className="chatContainer">
        <div className="wrapper">
            <Chat/>
        </div>
     </div>
    </div>
  )
}
