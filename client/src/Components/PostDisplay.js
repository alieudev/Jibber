import { useState } from 'react'
import { Link } from 'react-router-dom'
import EditForm from './EditForm'
import { Button } from 'semantic-ui-react'

function PostDisplay({ post, user, onDeletePost, appOnEditPost }) {
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
    <div className='p-container' >
      <div className='post-div' >
          <img className='post-avatar' src={renderPost.user.image} alt={renderPost.user.name}/>
        <main style={{ marginLeft: 80 }} >
          <div>
            <b>{renderPost.user.name}</b>
          </div>
          <p><Link to={`/users/${post.user.id}`}>@{renderPost.user.handle}</Link></p>
          <p>{renderPost.content}</p>
          <div>
            <em>{renderDate}</em>
          </div>
        </main>
      
        {renderPost.user.id === user.id ? (
          <>
            <Button basic color='blue' style={{'marginLeft': 70}}onClick={editButtonClick}>Edit</Button>
            <Button basic color='red' onClick={handleDelete}>Delete</Button>
            {errors ? errors.map((e) => <div>{e}</div>) : null}
            {/* {editClicked && !errors ? ( */}
            {editClicked ? (
              <EditForm
                post={renderPost}
                updatePost={updatePost}
                setEditClicked={setEditClicked}
                appOnEditPost={appOnEditPost}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default PostDisplay