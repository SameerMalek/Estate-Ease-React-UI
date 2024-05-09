import React, { useState } from "react";
import "./chat.scss";
import { userData } from "../../lib/dummydata";

export default function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src={userData.img} alt="userImage" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="userImage" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="userImage" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="userImage" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img src={userData.img} alt="userImage" />
          <span>{userData.name}</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={userData.img} alt="userImage" />
              {userData.name}
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
                similique.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
                similique.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
                similique.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
                similique.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
                similique.
              </p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi,
                similique.
              </p>
              <span>2 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea
              name="message"
              id="message"
              placeholder="Ask your question"
            ></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
