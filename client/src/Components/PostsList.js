import { useState } from "react"
import PostDisplay from "./PostDisplay"
import NewJibForm from "./NewJibForm"

function PostsList({ posts, user, appOnDeletePost, appOnAddPost }) {
	const [listPosts, setListPosts] = useState(posts)

	function onAddPost(data) {
		appOnAddPost(data)
		setListPosts([data, ...listPosts])
	}

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
			        <div className='p-container' >
          <div className='form-div' >
            <NewJibForm
              user={user}
              onAddPost={onAddPost}
            />
          </div>
        </div>

			{renderPosts}
		</div>
	)
}

export default PostsList