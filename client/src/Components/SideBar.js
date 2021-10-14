import { useState } from "react";

function SideBar({ user, updateUser }){ 
    // const [handle, setHandle] = useState(user.handle)
    // const [bio, setBio] = useState(user.bio)
    // const [image, setImage] = useState(user.image)

    const msec = Date.parse(user.created_at)
    const parseDate = new Date(msec).toDateString()
    const trimDate = parseDate.slice(4)
    const splitDate = trimDate.split(" ")
    const renderDate = `${splitDate[0]} ${splitDate[1]}, ${splitDate[2]}`

    // function handleEditBio(e){
    //     setBio(e.target.value)
    // }

    // function handleEditImage(e){
    //     setImage(e.target.value)
    // }

    // function submitEditProfile(e) {
    //     e.preventDefault()
    //     fetch(`/users/${user.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ 
    //             ...user,
    //             bio,
    //             image
    //         }),
    //     })
    //     .then((resp) => resp.json())
    //     .then((data) => {
	// 		console.log(data)
	// 		// updateUser(data)
    //     })
    // }

    return(
    <div className="main-div" >
        <h1>{user.name}</h1>
        <h2>@{user.handle}</h2>
        <img src={user.image} style={{heigh:"400px", width:"100px"}}alt={user.name}/>
        <p style={{ paddingTop: 10 }} ><b>Bio: </b>{user.bio}</p>
        <p>Joined on {renderDate}</p>
        {/* <h2>Edit Profile</h2>
        <form onSubmit={submitEditProfile} >
            <label>
                Handle: @<span>   </span>
                <input
                    type="text"
                    name="handle"
                    value={handle}
                    onChange={handleEditProfile}
                />
            </label>
            <div style={{ paddingTop: 10 }} />
            <label>
                Bio: <span>   </span>
                <input
                    type="text"
                    name="bio"
                    value={bio}
                    onChange={handleEditBio}
                />
            </label>
            <div style={{ paddingTop: 10 }} />
            <label>
                Image URL: <span>   </span>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={handleEditImage}
                />
            </label>
            <div style={{ paddingTop: 10 }} />
            <input type="submit" value="Submit" />
        </form> */}
    </div>)
}

export default SideBar;