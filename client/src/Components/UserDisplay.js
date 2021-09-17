import { useParams } from "react-router-dom"
import PostsList from "./PostsList";

function UserDisplay({ users, user, posts, appOnDeletePost, appOnAddPost, appOnEditPost }) {
  const params = useParams();
      
  const filteredUser = users.filter((user) => parseInt(user.id) === parseInt(params.id))[0]

  const userPosts = posts.filter((post) => parseInt(post.user.id) === parseInt(filteredUser.id))

  const msec = Date.parse(filteredUser.created_at)
  const parseDate = new Date(msec).toDateString()
  const trimDate = parseDate.slice(4)
  const splitDate = trimDate.split(" ")
  const renderDate = `${splitDate[0]} ${splitDate[1]}, ${splitDate[2]}`

  return(
    <div className="user-display-div" >
      <div>
        <h1>{`${filteredUser.name}`}</h1>
        <img src={filteredUser.image} alt={filteredUser.name} style={{ height: 300 }} />
        <p><b>Bio: </b>{filteredUser.bio}</p>
        <p><b>Member since: </b>{renderDate}</p>
        <h2>Posts</h2>
        <PostsList posts={userPosts} user={user} appOnDeletePost={appOnDeletePost} appOnAddPost={appOnAddPost} appOnEditPost={appOnEditPost} otherUser={filteredUser} />
      </div>
    </div>
  );
}

export default UserDisplay