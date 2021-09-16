import { useState } from 'react'
import EditForm from './EditForm'

function PostDisplay({ post, user, onDeletePost }) {
	const [editClicked, setEditClicked] = useState(false)
	const [errors, setErrors] = useState([])
	const [renderPost, setRenderPost] = useState(post)

	function handleDelete(e) {
    onDeletePost(post.id)
    e.preventDefault()
		fetch(`/posts/${post.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.errors) setErrors(data.errors);
        // else 
      });
	}

	function editButtonClick() {
		setEditClicked(!editClicked)
	}
	
	function updatePost(data) {
		setRenderPost(data)
	}

	const msec = Date.parse(renderPost.created_at)
	const renderDate = new Date(msec).toDateString()

	return (
    <div style={{ paddingBottom: 20 }}>
      <aside className = "avatar-aside">
        <img className='post-avatar' src={renderPost.user.image} alt={renderPost.user.name}/>
      </aside>
      <main>
        <p>
          <b>{renderPost.user.name}</b>
        </p>
        <p>@{renderPost.user.handle}</p>
        <p>{renderPost.content}</p>
        <div>
          <em>{renderDate}</em>
        </div>
      </main>
	  
      {renderPost.user.id === user.id ? (
        <>
          <button onClick={editButtonClick}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          {errors ? errors.map((e) => <div>{e}</div>) : null}
          {editClicked && !errors ? (
            <EditForm
              post={renderPost}
              updatePost={updatePost}
              setEditClicked={setEditClicked}
            />
          ) : null}
        </>
      ) : null}
    </div>
  );
}

export default PostDisplay