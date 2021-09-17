import { Fragment } from "react"
import { Link } from 'react-router-dom'
import JibberLogo from '../Images/JibberLogo.png'

function Navbar({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header style={{ backgroundColor: "Gainsboro", 'paddingTop':20, 'paddingBottom':20 }} >
			<Fragment>
				<span style={{ 'paddingLeft':15, 'paddingRight':15, fontSize:30 }} ><b><Link to='/'>Jibber</Link></b></span>
				{ user ? 
					<Fragment>
						<Link to="/users" style={{'paddingLeft':15, 'paddingRight':15}} >Users</Link>
						<span style={{ float: "right", 'paddingRight':15 }} >
							<span style={{'paddingLeft':15, 'paddingRight':15}}>Welcome, <Link to={`/users/${user.id}`} >@{user.handle}</Link></span>
							<button onClick={handleLogout}>Logout</button>
						</span>
					</Fragment>
				:
					<span>Not Logged In</span> //<button>Login</button> MAKE THIS BUTTON A LINK TO LOGIN??
				}
			</Fragment>
    </header>
  );
}

export default Navbar