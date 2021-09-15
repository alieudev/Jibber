// import { useState, useEffect, Fragment } from "react"
import PostDisplay from "./PostDisplay"

function PostsList({ posts, user }) {
	const renderPosts = posts.map((post) => (
    <PostDisplay post={post} key={post.id} user={user} />
  ));

	return (
		<div>
			{renderPosts}
		</div>
	)
}

export default PostsList