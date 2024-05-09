import React from 'react'
import "./profile.scss";
import { userData } from '../../lib/dummydata';
import List from '../../components/list/list';
import Chat from '../../components/chat/chat';

export default function Profile() {
  return (
    <div className='profile'>
     <div className="details">
        <div className="wrapper">
            <div className="title">
                <h1>User Information</h1>
                <button>Update Profile</button>
            </div>
            <div className="info">
                <span>Avatar: <img src={userData.img} alt="userImg" /></span>
                <span>Username:{userData.name}</span>
                <span>Email:{userData.email}</span>
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
