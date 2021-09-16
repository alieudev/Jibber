import { Fragment } from "react"
// import { Link } from "react.router.dom"

function Navbar({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header style={{ backgroundColor: "Gainsboro", 'paddingTop':15, 'paddingBottom':15 }} >
			<Fragment>
				<span style={{ 'paddingRight':15, fontSize:30 }} ><b>Jibber</b></span>
				{ user ? 
					<Fragment>
						<span style={{'paddingRight':15}}>Welcome, @{user.handle}</span>
						<button onClick={handleLogout}>Logout</button>
					</Fragment>
				:
					<span>Not Logged In</span> //<button>Login</button> MAKE THIS BUTTON A LINK TO LOGIN??
				}
			</Fragment>
    </header>
  );
}

export default Navbar