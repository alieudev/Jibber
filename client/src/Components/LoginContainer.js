import { useState, Fragment } from "react"
import LoginForm from './LoginForm'
import Signup from './Signup'


function LoginContainer({ onLogin }) {
	const [hasAccount, setHasAccount] = useState(true)

	function handleClick() {
		setHasAccount(!hasAccount)
	}

	return (
		<Fragment>
			{ hasAccount ? 
				<div>
					<LoginForm onHandleClick={handleClick} onLogin={onLogin} />
					<div>or</div>
					<button onClick={handleClick} >Signup for a New Account</button>
				</div>
			:
				<div>
					<Signup onLogin={onLogin} />
					<div>or</div>
					<button onClick={handleClick} >Login</button>
				</div>
			}
		</Fragment>
	) 
}

export default LoginContainer