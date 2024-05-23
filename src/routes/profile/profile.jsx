import React, { Suspense, useContext } from "react";
import "./profile.scss";
import List from "../../components/list/list";
import Chat from "../../components/chat/chat";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import { AuthContext } from "./../../context/AuthContext";

export default function Profile() {
  const data = useLoaderData();
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await apiRequest.post("/auth/logout");
      updateUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <Link to="/profile/update" className="button">
              Update Profile
            </Link>
          </div>
          <div className="info">
            <span>
              <b>Avatar:</b>{" "}
              <img src={currentUser.avatar || "noavatar.png"} alt="userImg" />
            </span>
            <span>
              <b>Username:</b> {currentUser.username}
            </span>
            <span>
              <b>Email:</b> {currentUser.email}
            </span>
            <button onClick={handleLogout}>Log out</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add" className="button">
              Create New Post
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
               <List posts={postResponse.data.userPosts}/>
              }
            </Await>
          </Suspense>
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) =>
               <List posts={postResponse.data.savedPosts}/>
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
        <Suspense fallback={<p>Loading Chats!</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(chatResponse) =>
             <Chat chats={chatResponse.data} />
              }
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
