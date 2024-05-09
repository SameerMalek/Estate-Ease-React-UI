import React from 'react'
import "./list.scss";
import Card from "../card/card.jsx";
import {listData} from "../../lib/dummydata.js"
export default function List() {
  return (
    <div className='list'>
      {listData.map(item =>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}
