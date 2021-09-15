import { useState, useEffect, Fragment } from "react"
import PostsList from "./PostsList"

function PostsContainer({ user }) {
  const [posts, setPosts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
    fetch("/posts")
    .then((r) => r.json())
    .then((data) => {
      // console.log("fetchData:", data)
      setPosts(data)
      // console.log("postsState:", posts)
      setIsLoaded(true)
    })
  }, [])

	return (
    <Fragment>
      {isLoaded && posts.length > 0 ? (
        <div>
          <h1>Posts</h1>
          <PostsList posts={posts} user={user} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </Fragment>
  );
}

export default PostsContainer