// import './App.css';
import { useState, useEffect, Fragment } from "react"
// import { Switch, Route } from "react-router-dom";
import LoginContainer from './Components/LoginContainer'
import PostsContainer from "./Components/PostsContainer"
import Navbar from "./Components/Navbar"
import SideBar from "./Components/SideBar"

function App() {
  // const [posts, setPosts] = useState(false)
  // const [isLoaded, setIsLoaded] = useState(false)
  // const [users, setUsers] = useState(false)
  const [user, setUser] = useState(null)

  // CHECKS TO SEE IF A USER IS ALREADY LOGGED IN
  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((data) => setUser(data));
      }
    });
  }, []);

  function onLogin(newUser) {
    setUser(newUser)
  }

  function onLogout() {
    setUser(null)
  }

  return (
    <Fragment>
      <Navbar onLogout={onLogout} user={user} />
      {user ? 
        <div>
          <h1>PLACEHOLDER FOR WHEN A USER IS LOGGED IN</h1>
          <PostsContainer />
          <SideBar></SideBar>
          {/* <Switch> 
          </Switch> */}
        </div>
      :
        <LoginContainer onLogin={onLogin} />
      }
    </Fragment>
  
  );
}

export default App;
