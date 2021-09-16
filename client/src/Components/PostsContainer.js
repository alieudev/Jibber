import { useState, useEffect, Fragment } from "react"
import PostsList from "./PostsList"
import NewJibForm from "./NewJibForm"

function PostsContainer({ user }) {
  const [posts, setPosts] = useState([])
  const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
    fetch("/posts")
    .then((r) => r.json())
    .then((data) =>{ 
      setPosts(data) 
    })
  },[])

  const onAddPost = (data) => setPosts([data, ...posts])

  const onDeletePost = (data) => {
    let filteredPosts = posts.filter(post => post.id !== data)
    setPosts(filteredPosts)
  }
	
  return (
    <Fragment>
      { posts.length > 0 ? (<div>
        <NewJibForm
        user={user}
        onAddPost={onAddPost}
        setIsClicked={setIsClicked}
      />
      <br></br>
      <br></br>
        <div className="postDiv" >
        </div>
        <PostsList posts={posts} user={user} onDeletePost={onDeletePost} />
      </div>
      ) : (<h1>Loading...</h1>)}
    </Fragment>
  );
}

export default PostsContainer;
