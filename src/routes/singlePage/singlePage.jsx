import React from 'react'
import Slider from '../../components/slider/slider'
import {singlePostData, userData} from "../../lib/dummydata.js"
import "./singlePage.scss"
import Map from "../../components/map/map.jsx"

export default function SinglePage() {
  return (
    <div className='singlepage'>
     <div className="details">
      <div className="wrapper">
        <Slider images={singlePostData.images}/>
        <div className="info">
          <div className="top">
            <div className="post">
              <h1>{singlePostData.title}</h1>
              <div className="address">
                <img src="/pin.png" alt="address" />
                <span>{singlePostData.address}</span>
              </div>
              <div className="price">
                ${singlePostData.price}
              </div>
            </div>
            <div className="user">
              <img src={userData.img} alt="user" />
              <span>{userData.name}</span>
            </div>
          </div>
          <div className="bottom">
            {singlePostData.description}
          </div>
        </div>
      </div>
     </div>
     <div className="features">
      <div className="wrapper">
        <p className='title'> General</p>
        <div className="listVertical">
          <div className="feature">
            <img src="/utility.png" alt="utility" />
            <div className="featureText">
              <span>Utilities</span>
              <p>Renter is responsible.</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="pets" />
            <div className="featureText">
              <span>Pet Policy</span>
              <p>Pets allowed.</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fees.png" alt="fees" />
            <div className="featureText">
              <span>Property Fees</span>
              <p>Must have 3x the rent in total household income.</p>
            </div>
          </div>
        </div>
        <p className='title'> Sizes
        </p>
        <div className="sizes">
        <div className="size">
          <img src="/area.png" alt="area" />
          <span>80sqft</span>
        </div>
        <div className="size">
          <img src="/bedroom.png" alt="bedroom" />
          <span>{singlePostData.bedRooms}</span>
        </div>
        <div className="size">
          <img src="/bathroom.png" alt="bathroom" />
          <span>{singlePostData.bathroom}</span>
        </div>
        </div>
        <p className='title'> Nearby Places</p>
        <div className="listHorizontal">
        <div className="feature">
            <img src="/school.png" alt="utility" />
            <div className="featureText">
              <span>School</span>
              <p>250m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="/bus.png" alt="pets" />
            <div className="featureText">
              <span>Bus Stop</span>
              <p>100m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="/restaurant.png" alt="fees" />
            <div className="featureText">
              <span>Restaurant</span>
              <p>200m away</p>
            </div>
          </div>
        </div>
        <p className='title'> Location</p>
        <div className="mapContainer">
          <Map items={[singlePostData]}/>
        </div>
        <div className="buttons">
          <button>
            <img src="/chat.png" alt="chat" />
            Send a message
          </button>
          <button>
            <img src="/save.png" alt="chat" />
            Save the Place
          </button>
        </div>
      </div>
     </div>
    </div>
  )
}
