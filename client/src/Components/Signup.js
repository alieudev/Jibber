import { useState, Fragment } from "react"

function Signup({ onLogin }) {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const [password, setPassword] = useState("")
  const [image, setImage] = useState("")
  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, 
				handle,
				password, 
				image
			}),
    })
      .then((r) => r.json())
      .then((data) => {
        if(data.errors) setErrors(data.errors)
				else onLogin(data)
			});
  }

	return (
		<Fragment>
			{errors?errors.map(e => <div>{e}</div>):null}
			{/* {errors?<div>{errors}</div>:null} */}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					placeholder={"name"}
					onChange={(e) => setName(e.target.value)}
				/>
				<br />
				<input
					type="text"
					value={handle}
					placeholder={"handle"}
					onChange={(e) => setHandle(e.target.value)}
				/>
				<br />
				<input
					type="password"
					value={password}
					placeholder={"password"}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<input
					type="text"
					value={image}
					placeholder={"image"}
					onChange={(e) => setImage(e.target.value)}
				/>
				<br />
				<button type="submit">Signup</button>
			</form>
		</Fragment>
  );
}

export default Signup