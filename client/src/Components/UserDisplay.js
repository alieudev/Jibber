import { useParams } from "react-router-dom"
import UserPostsDisplay from './UserPostsDisplay'

function UserDisplay({ users }) {

const params = useParams();
    
const filteredUser = users.filter((user) => parseInt(user.id) === parseInt(params.id));

const userPosts = filteredUser[0].posts.map((post) => <UserPostsDisplay post={post} user={filteredUser[0]} />)

return(
  <div>
	  <h1>Posts by: {`${filteredUser[0].name}`}</h1>
    <div>{userPosts}</div>
  </div>
);
}

export default UserDisplay