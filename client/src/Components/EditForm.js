import { useState } from 'react'

function EditForm({ post, updatePost, setEditClicked, appOnEditPost }) {
  const [content, setContent] = useState(post.content);

  function handleEditContent(e) {
    e.preventDefault();
    setContent(e.target.value);
  }

  function submitEdit(e) {
    e.preventDefault();
    fetch(`/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
				updatePost(data)
        appOnEditPost(data)
				setEditClicked((prevState) => !prevState)
			});
  }

  return (
    <>
      <form onSubmit={submitEdit}>
        <label>
          Edit your post:
          <input
            type="text"
            name="content"
            value={content}
            onChange={handleEditContent}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default EditForm;