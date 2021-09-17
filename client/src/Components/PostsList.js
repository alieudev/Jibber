import { useState } from "react"
import PostDisplay from "./PostDisplay"

function PostsList({ posts, user, appOnDeletePost }) {
	const [listPosts, setListPosts] = useState(posts)

	const onDeletePost = (data) => {
		let filteredPosts = listPosts.filter(post => post.id !== data)
		setListPosts(filteredPosts)
		appOnDeletePost(data)
	}

	const renderPosts = listPosts.map((post) => (
    <PostDisplay post={post} key={post.id} user={user} onDeletePost={onDeletePost} />
  ));	

	return (
		<div>
			{renderPosts}
		</div>
	)
}

export default PostsList