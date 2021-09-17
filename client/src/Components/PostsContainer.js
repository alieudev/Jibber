import { useState, Fragment } from "react"
import PostsList from "./PostsList"
import NewJibForm from "./NewJibForm"

function PostsContainer({ user, posts, setPosts, appOnDeletePost, appOnAddPost }) {
  // const [postsList, setPostsList] = useState(posts)

  function onAddPost(data) {
    setPosts([data, ...posts])
    // setPostsList([data, ...postsList])
  }
	
  return (
    <Fragment>
      { posts.length > 0 ? (
      <div>
        <div className='p-container' >
          <div className='form-div' >
            <NewJibForm
              user={user}
              onAddPost={appOnAddPost}
            />
          </div>
        </div>
        <PostsList posts={posts} user={user} appOnDeletePost={appOnDeletePost} />
      </div>
      ) : (<h1>Loading...</h1>)}
    </Fragment>
  );
}

export default PostsContainer;
