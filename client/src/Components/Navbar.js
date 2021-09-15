import { Fragment } from "react"
// import { Link } from "react.router.dom"

function Navbar({ onLogout, user }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header>
			<h1>Jibber</h1>
			<Fragment>
				{ user ? 
					<button onClick={handleLogout}>Logout</button>
				:
					<span>Not Logged In</span> //<button>Login</button> MAKE THIS BUTTON A LINK TO LOGIN??
				}
			</Fragment>
    </header>
  );
}

export default Navbar