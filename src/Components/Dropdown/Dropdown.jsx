import React, { useContext, useEffect, useState } from 'react';
import "./Dropdown.css"
import { IoChevronDownOutline } from "react-icons/io5";
import { BsSliders2 } from "react-icons/bs";
import { DataContext } from '../Context/DataContext';
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {setGBP,setgrp,setor,grp,or,setGBS,setGBU,sortByTitle,sortByPriority,tickets,setTickets} = useContext(DataContext)

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const changeGroup = (e) => {
        
        if (e==="status" || e?.target?.value === "status") {
            setGBS(true)
            setGBP(false)
            setGBU(false)
        } else if (e=== "priority" ||e?.target?.value === "priority") {
            setGBS(false)
            setGBP(true)
            setGBU(false)
        } else {
            setGBS(false)
            setGBP(false)
            setGBU(true)
        }
        localStorage.setItem("group",e?.target?.value ||e)
    }
    const sortedA = [...tickets]
    const changePriority = (e)=>{
        console.log(e)
        if ( (e === "priority"|| e?.target?.value ===  "priority")){
            sortedA.sort((a,b)=>b.priority-a.priority)
        } else {
            sortedA.sort((a,b)=>a.title < b.title ? -1 :1 )
            
        }
        setTickets(sortedA)
        localStorage.setItem("order",e?.target?.value ||  e)
    }

    useEffect(()=>{
        changePriority(localStorage.getItem("order"))
        changeGroup(localStorage.getItem("group"))
    },[])
    return (

        <div className='dropdown'>
            <div onClick={handleToggle} className='display'> <BsSliders2 size={15} /> Display <IoChevronDownOutline />  </div>
            {isOpen &&
                <div className='Ord'>
                    <div className="group">
                        <span>Grouping</span>
                        <select onChange={(e) => changeGroup(e)} defaultValue={grp}>
                            <option value="status">Status</option>
                            <option value="priority">Priority</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                    <div className="order">
                        <span>Ordering</span>
                        <select onChange={(e) => changePriority(e)} defaultValue={or} >
                            <option value="priority">Priority</option>
                            <option value="title"  >Title</option>
                        </select>
                    </div>
                </div>
            }
        </div>

    );
};

export default Dropdown;
