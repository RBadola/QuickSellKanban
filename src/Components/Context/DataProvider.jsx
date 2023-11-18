import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

const DataStates = ({ children }) => {
    
    const [tickets, setTickets] = useState([])
    const [sortedTickets, setsortedTickets] = useState([])
    const [users, setUsers] = useState([])
    const[status,setstatus] = useState([])
    const[pr,setpr] = useState([0,1,2,3,4])
    const[us,setus] = useState([])
    const [groupByStatus,setGBS]=useState(true)
    const [groupByPriority,setGBP]=useState(false)
    const [groupByUser,setGBU]=useState(false)    
    const [sortedData,setsort]=useState([])
    
    const getData = async () => {
        const data = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
        const res = await data.json()
        setTickets(res.tickets)
        setUsers(res.users)
        Status(res.tickets)
        Users(res.tickets)       
    }
    const [or,setor] = useState(localStorage.getItem("order") || "priority")
    const [grp,setgrp] = useState(localStorage.getItem("group") || "status")

    console.log(tickets)
    
    const Status = (tickets) => {
        let initial = new Set()
        let statuses = tickets.reduce(function (acc, curr) {
            return acc.add(curr.status)
        }, initial)
        let status = Array.from(statuses)
        setstatus(status)
    }
    useEffect(()=>{
        getData()
        localStorage.setItem("order",or)
        localStorage.setItem("group",grp)
    },[])

    const Users = (tickets) => {
        let initial = new Set()
        let statuses = tickets.reduce(function (acc, curr) {
            return acc.add(curr.userId)
        }, initial)
        let uid = Array.from(statuses)
        uid.sort()
        setus(uid)
    }
    const defaultsort =()=>{
        const sortedTicks =[...tickets]
        const e =localStorage.getItem("order")
        if ( (e === "priority")){
            sortedTicks.sort((a,b)=>b.priority-a.priority)
        } else {
            sortedTicks.sort((a,b)=>a.title < b.title ? -1 :1 )
            
        }
    }
    return <DataContext.Provider value={{setsort,sortedTickets,setsortedTickets,setor,grp,or,setgrp,sortedData,pr,us,setpr,setus,groupByPriority,groupByStatus,groupByUser,setGBP,setGBS,setGBU,setTickets, tickets,getData, users,status}}>{children}</DataContext.Provider>
}

export default DataStates