import { useState } from "react";

function SideBar({ user, updateUser }){ 
    const [isClicked, setIsClicked] = useState(false)
    const [bio, setBio] = useState(user.bio)
    const [image, setImage] = useState(user.image)
    // const [password, setPassword] = useState('password')
    
    const msec = Date.parse(user.created_at)
    const parseDate = new Date(msec).toDateString()
    const trimDate = parseDate.slice(4)
    const splitDate = trimDate.split(" ")
    const renderDate = `${splitDate[0]} ${splitDate[1]}, ${splitDate[2]}`

    function handleEditClick(){
        setIsClicked(!isClicked)
    }

    function handleEditBio(e){
        setBio(e.target.value)
    }

    function handleEditImage(e){
        setImage(e.target.value)
    }

    // function handleEditPassword(e){
    //     setPassword(e.target.value)
    // }

    function submitEditProfile(e) {
        e.preventDefault()
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // password,
                bio,
                image
            }),
        })
        .then((resp) => resp.json())
        .then((data) => {
			// console.log(data)
			updateUser(data)
            setIsClicked(!isClicked)
        })
    }

    return(
    <div className="main-div" >
        <h1>{user.name}</h1>
        <h2>@{user.handle}</h2>
        <img src={user.image} alt={user.name}/>
        <p style={{ paddingTop: 10 }} ><b>Bio: </b>{user.bio}</p>
        <p>Joined on {renderDate}</p>
        <button onClick={handleEditClick}>Edit Profile</button>
        { isClicked ? (
            <form onSubmit={submitEditProfile} >
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
                {/* <div style={{ paddingTop: 10 }} /> */}
                {/* <label>
                    Password: <span>   </span>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={handleEditPassword}
                    />
                </label> */}
                <div style={{ paddingTop: 10 }} /> 
                <input type="submit" value="Confirm Changes" />
            </form>
        ) : null }
    </div>)
}

export default SideBar;