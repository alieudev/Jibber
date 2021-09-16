import { useState } from 'react'
import { Link } from 'react-router-dom'
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
  const parseDate = new Date(msec).toDateString()
  const splitDate = parseDate.split(" ")
  const renderDate = `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`

	return (
    <div style={{ paddingBottom: 20 }}>
        <img className='post-avatar' src={renderPost.user.image} alt={renderPost.user.name}/>
      <main style={{ marginLeft: 70 }} >
        <p>
          <b>{renderPost.user.name}</b>
        </p>
        <p><Link to={`/users/${user.id}`}>@{renderPost.user.handle}</Link></p>
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