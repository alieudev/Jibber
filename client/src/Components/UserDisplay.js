import { useParams } from "react-router-dom"
import UserPostsDisplay from './UserPostsDisplay'

function UserDisplay({ users }) {

const params = useParams();
    
const filteredUser = users.filter((user) => parseInt(user.id) === parseInt(params.id))[0]

const userPosts = filteredUser.posts.map((post) => <UserPostsDisplay post={post} user={filteredUser} />)

const msec = Date.parse(filteredUser.created_at)
const parseDate = new Date(msec).toDateString()
const trimDate = parseDate.slice(4)
const splitDate = trimDate.split(" ")
const renderDate = `${splitDate[0]} ${splitDate[1]}, ${splitDate[2]}`


return(
  <div className="user-display-div" >
    <div>
      <h1>{`${filteredUser.name}`}</h1>
      <img src={filteredUser.image} alt={filteredUser.name}/>
      <p><b>Bio: </b>{filteredUser.bio}</p>
      <p><b>Member since: </b>{renderDate}</p>
      <h2>Posts</h2>
      <div>{userPosts}</div>
    </div>
  </div>
);
}

export default UserDisplay