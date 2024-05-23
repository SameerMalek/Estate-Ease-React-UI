import React, { useState, useContext } from "react";
import Slider from "../../components/slider/slider";
import "./singlePage.scss";
import Map from "../../components/map/map.jsx";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { AuthContext } from "./../../context/AuthContext.jsx";
import apiRequest from "./../../lib/apiRequest.js";

export default function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSave = async () => {
    setSaved((prev) => !prev);
    if (!currentUser) {
      navigate("/login");
    }
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="address" />
                  <span>{post.address}</span>
                </div>
                <div className="price">${post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar || "/noavatar.png" } alt="user" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title"> General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="pets" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets Not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fees.png" alt="fees" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title"> Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/area.png" alt="area" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bedroom.png" alt="bedroom" />
              {post.bedroom === 1 ? (
                <p>{post.bedroom} Bedroom</p>
              ) : (
                <p>{post.bedroom} Bedrooms</p>
              )}
            </div>
            <div className="size">
              <img src="/bathroom.png" alt="bathroom" />
              {post.bathroom === 1 ? (
                <p>{post.bathroom} Bathroom</p>
              ) : (
                <p>{post.bathroom} Bathrooms</p>
              )}
            </div>
          </div>
          <p className="title"> Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="utility" />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school} m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/bus.png" alt="pets" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus} m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/restaurant.png" alt="fees" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant} m away</p>
              </div>
            </div>
          </div>
          <p className="title"> Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat" />
              Send a Message
            </button>
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white",
              }}
            >
              <img src="/save.png" alt="chat" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
