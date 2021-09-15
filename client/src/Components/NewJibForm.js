import {useState} from 'react'

function NewJibForm({ user, onAddPost, setIsClicked }) {
    const [content, setContent] = useState("");

    function handleNewContent(e) {
      e.preventDefault();
      setContent(e.target.value);
    }
  
    function submitJib(e) {
      e.preventDefault();
      fetch('/posts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content,
		    user_id: user.id
        }),
      })
        .then((resp) => resp.json())
        .then((data) => {
                  onAddPost(data)
                  setIsClicked(false)
              });
    }
    
    return (
        <>
        <form onSubmit={submitJib}>
          <label>
            Create new jib:
            <input
              type="text"
              name="content"
              value={content}
              onChange={handleNewContent}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    )
}

export default NewJibForm;