// import { useState, useEffect, Fragment } from "react"
import PostDisplay from "./PostDisplay"

function PostsList({ posts }) {
	const renderPosts = posts.map((post) =>
		<PostDisplay post={post} key={post.id} />
	)

	return (
		<div>
			{renderPosts}
		</div>
	)
}

export default PostsList