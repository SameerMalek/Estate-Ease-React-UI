import React from 'react'
import { Link } from 'react-router-dom'
import "./card.scss"

export default function Card({item}) {
  return (
    <div className='card'>
    <Link to={`/${item.id}`} className="imgContainer">
      <img src={item.img} alt="House" />
    </Link>
    <div className="textContainer">
      <h2 className='title'>
        <Link to={`/${item.id}`}>{item.title}</Link>
      </h2>
      <p className='address'>
        <img src="/pin.png" alt="pin" />
        <span>{item.address}</span>
      </p>
      <p className="price">$ {item.price}</p>
      <div className="bottom">
        <div className="features">
          <div className="feature">
          <img src="/bedroom.png" alt="Bedrooms" />
          <span>{item.bedroom} bedroom</span>
          </div>
          <div className="feature">
          <img src="/bathroom.png" alt="Bathrooms" />
          <span>{item.bathroom} bathroom</span>
        </div>
        </div>
        <div className="icons">
          <div className="icon">
            <img src="/save.png" alt="Bookmark" />
          </div>
          <div className="icon">
            <img src="/chat.png" alt="Chat" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
