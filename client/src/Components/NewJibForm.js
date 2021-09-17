import {useState} from 'react'
import { Form, TextArea, Button } from 'semantic-ui-react'

const TextAreaExampleTextArea = () => (
  <Form>
    <TextArea placeholder='Tell us more' />
  </Form>
)

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
      setContent('')
    });
  }
  
  return (
    <>
      <Form style={{ 'width': '700px' }} onSubmit={submitJib}>
        <TextArea 
          placeholder="What's happenning?"
          value={content} 
          name="content"
          onChange={handleNewContent}
        />
        <div style={{ height: 7 }} />
        <Button floated="right" primary type='submit'>Jab</Button>
      </Form>
    </>
  )
}

export default NewJibForm;