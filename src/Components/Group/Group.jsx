import React, { useContext, useEffect, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FiPlayCircle, FiPlus } from "react-icons/fi"
import "./Group.css"
import Card from '../Card/Card'
import { DataContext } from '../Context/DataContext'
const Group = (props) => {
    const titles = ["No Priority", "Low", "Medium", "High", "urgent"]

    const{tickets, sortedTickets} = useContext(DataContext)
    
    return (
        <div className='card_group'>
            <div className='group_header'>
                <div className='titi'>
                <FiPlayCircle />
                <div>
                    {
                        props?.t === "priority" ?
                            <span className='group_title'>{titles[props.title]}</span> : <span className='group_title'>{props.title}</span>
                    }

                    <span className='group_count'></span>
                </div>
                </div>
                <div className='icons'>
                    <FiPlus />
                    <BsThreeDots />
                </div>
            </div>
            <div className='cards'>
                {localStorage.getItem("order") === "priority" ?
                    sortedTickets?.map((item) => {
                        if (item?.status === props?.title || item?.userId === props?.title || item?.priority === props?.title) {
                            return <Card title={item.title} user={item.userId} id={item.id} tag={item.tag[0]} key={item.id} />
                        }
                        return ""
                    })
                    :
                    tickets?.map((item) => {
                        if (item?.status === props?.title || item?.userId === props?.title || item?.priority === props?.title) {
                            return <Card title={item.title} user={item.userId} id={item.id} tag={item.tag[0]} key={item.id} />
                        }
                        return ""
                    })
                }
            </div>
        </div>
    )
}

export default Group