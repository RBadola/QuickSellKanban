import React from 'react'
import "./Card.css"
import { BsExclamationCircleFill } from 'react-icons/bs'
import image from "../../download.png"
const Card = (props) => {
  return (
    <div className='card'>
      <div className='card_id'>
        <span>{props.id}</span>
        <div>
          <img src={image}  className='image_placeholder'  />
        </div>
      </div>
      <span className='card_title'>{props.title}</span>
      <div className='tags'>
        <BsExclamationCircleFill height={20} width={20} size={27} className='tag tag-icon'/> 
        <span className='tag'>{props.tag}</span>
      </div>
    </div>
  )
}

export default Card