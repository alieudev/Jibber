import { useState} from "react"
// import { Link, Redirect } from 'react-router-dom'
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

function LoginForm ({ onLogin }){
	const [handle, setHandle] = useState("");
	const [password, setPassword] = useState("");
  	const [errors, setErrors] = useState([]);

	  function handleSubmit(e) {
		    e.preventDefault();
		    fetch("/login", {
		      method: "POST",
		      headers: {
		        "Content-Type": "application/json",
		      },
		      body: JSON.stringify({ 
						handle,
						password
					}),
		    })
		      .then((r) => r.json())
		      .then((data) => {
		        if(data.errors) setErrors(data.errors)
						else onLogin(data)
					});  }

// 	return(
// 	<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
// 	  <Grid.Column style={{ maxWidth: 450 }}>
// 		<Header as='h2' color='blue' textAlign='center'>
// 		Log-in to your account
// 		</Header>
// 		<Form size='large' onSubmit={handleSubmit}>
// 		  <Segment stacked>
// 			<Form.Input fluid icon='user' iconPosition='left' placeholder='Name' />
// 			<Form.Input
			
// 			onChange={(e) => setPassword(e.target.value)}
// 			  fluid
// 			  icon='lock'
// 			  iconPosition='left'
// 			  placeholder='Password'
// 			  type='password'
// 			/>
  
// 			<Button color='blue' fluid size='large'>
// 			  Login
// 			</Button>
// 		  </Segment>
// 		</Form>
// 		<Message>
// 		  Sign up for Jibber? <Link onClick={onHandleClick}> Sign up</Link>
// 		</Message>
// 	  </Grid.Column>
// 	</Grid>)
// }
//   export default LoginForm; 

// function Login({ onLogin }) {
//   const [handle, setHandle] = useState("");
// 	const [password, setPassword] = useState("")
//   const [errors, setErrors] = useState([])

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ 
// 				handle,
// 				password
// 			}),
//     })
//       .then((r) => r.json())
//       .then((data) => {
//         if(data.errors) setErrors(data.errors)
// 				else onLogin(data)
// 			});  }

  return (
		<div>
			{errors?errors.map(e => <div style={{ color: "red" }} >{e}</div>):null}
			{/* {errors?<div>{errors}</div>:null} */}
			<form onSubmit={handleSubmit} >
				<input
					type="text"
					value={handle}
					placeholder={"handle"}
					onChange={(e) => setHandle(e.target.value)}
				/>
        <div style={{ paddingTop: 10 }} />
				<input
					type="text"
					value={password}
					placeholder={"password"}
					onChange={(e) => setPassword(e.target.value)}
				/>
        <div style={{ paddingTop: 10 }} />
				<button type="submit">Login</button>
			</form>
		</div>
  );
}

export default LoginForm;