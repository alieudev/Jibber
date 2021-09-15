import { useState, useEffect, Fragment } from "react"
import PostsList from "./PostsList"
import NewJibForm from "./NewJibForm"

function PostsContainer({ user }) {
  const [posts, setPosts] = useState('')
  const [isClicked, setIsClicked] = useState(false);

	useEffect(() => {
    fetch("/posts")
    .then((r) => r.json())
    .then((data) =>{ 
      setPosts(data) 
    })
  },[])

  const onAddPost = (data) => setPosts([data, ...posts])
 
	
  return (
    <Fragment>
      { posts.length > 0 ? (
      <div>
        <button onClick={()=> setIsClicked(!isClicked)}>New Jib</button>
        {isClicked ? (
          <NewJibForm
            user={user}
            onAddPost={onAddPost}
            setIsClicked={setIsClicked}
          />
         ) : null}
        <h1>Posts</h1>
        <PostsList posts={posts} user={user} />
      </div>
      ) : (<h1>Loading...</h1>)}
    </Fragment>
  );
}

export default PostsContainer;
