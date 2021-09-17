import { useState } from "react"

function Signup({ onLogin }) {
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
	const [password, setPassword] = useState("")
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
				password
			}),
    })
      .then((r) => r.json())
      .then((data) => {
        if(data.errors) setErrors(data.errors)
				else onLogin(data)
			});
  }

	return (
		<div>
			{errors?errors.map(e => <div style={{ color: "red" }} >{e}</div>):null}
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={name}
					placeholder={"name"}
					onChange={(e) => setName(e.target.value)}
				/>
        <div style={{ paddingTop: 10 }} />
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
				<button type="submit">Signup</button>
			</form>
		</div>
  );
}

export default Signup