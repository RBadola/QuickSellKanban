import React from 'react'
import "./Card.css"
import { BsExclamationCircleFill } from 'react-icons/bs'
const Card = (props) => {
  return (
    <div className='card'>
      <div className='card_id'>
        <span>{props.id}</span>
        <div className='image_placeholder'></div>
      </div>
      <span className='card_title'>{props.title}</span>
      <div className='tags'>
         <BsExclamationCircleFill size={25} className='tag'/> 
        <span className='tag'>{props.tag}</span>
      </div>
    </div>
  )
}

export default Card