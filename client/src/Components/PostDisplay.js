

function PostDisplay({ post }) {

	return (
		<div style={{paddingBottom: 20}} >
			<p><b>{post.user.name}</b></p>
			<p>@{post.user.handle}</p>
			<p>{post.content}</p>
			<div><em>{post.updated_at}</em></div>
		</div>
	)
}

export default PostDisplay