import React from "react";

function SideBar({user}){   
    const msec = Date.parse(user.created_at)
    const parseDate = new Date(msec).toDateString()
    const trimDate = parseDate.slice(4)
    const splitDate = trimDate.split(" ")
    const renderDate = `${splitDate[0]} ${splitDate[1]}, ${splitDate[2]}`

    return(<>
    <h1>{user.name}</h1>
    <h2>@{user.handle}</h2>
    <img src={user.image} alt={user.name}/>
    <p>{user.bio}</p>
    <h2>{renderDate}</h2>
    </>)
}

export default SideBar;