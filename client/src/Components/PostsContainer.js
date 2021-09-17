import { Fragment } from "react"
import PostsList from "./PostsList"

function PostsContainer({ user, posts, appOnDeletePost, appOnAddPost }) {

  return (
    <Fragment>
      { posts.length > 0 ? (
      <div>
        <PostsList posts={posts} user={user} appOnDeletePost={appOnDeletePost} appOnAddPost={appOnAddPost} />
      </div>
      ) : (<h1>Loading...</h1>)}
    </Fragment>
  );
}

export default PostsContainer;
