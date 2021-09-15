import React from "react";

function SideBar({user}){   
    return(<>
    <h1>{user.name}</h1>
    <h2>@{user.handle}</h2>
    <img src={user.image} alt={user.name}/>
    <p>{user.bio}</p>
    <h2>{user.created_at}</h2>
    </>)
}


export default SideBar;