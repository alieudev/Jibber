import { useState, useEffect, Fragment } from "react"
import { Switch, Route } from "react-router-dom";
import LoginContainer from './Components/LoginContainer'
import PostsContainer from "./Components/PostsContainer"
import Navbar from "./Components/Navbar"
import SideBar from "./Components/SideBar"
import UserDisplay from './Components/UserDisplay'
import LinkUserData from './Components/LinkUserData'
import Signup from "./Components/Signup";

function App() {
  const [user, setUser] = useState(null)
  const [fetchUsers, setFetchUsers] = useState(null)

  // CHECKS TO SEE IF A USER IS ALREADY LOGGED IN
  useEffect(() => {
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((data) => setUser(data));
      }
    });
  }, []);

  // FETCHES ALL USERS
  useEffect(() => {
    fetch("/users")
    .then((res) => res.json())
    .then((data)=> setFetchUsers(data))
  }, [])

  function onLogin(newUser) {
    setUser(newUser)
  }

  function onLogout() {
    setUser(null)
  }

  return (
    <Fragment>
      <Navbar onLogout={onLogout} user={user} />
      {user && fetchUsers ? (
        <div className="main-div" >
          <aside>
            <SideBar user={user}></SideBar>
          </aside>
          <main>
            <Switch>
              <Route exact path ="/">
                <PostsContainer user={user} />{" "}
              </Route>
              <Route exact path ="/users">
                <LinkUserData fetchUsers={fetchUsers} />
              </Route>
              <Route exact path="/users/:id">
               <UserDisplay users={fetchUsers} />
              </Route>
              {/* <Route exact path="/signup">
                <Signup/>
              </Route> */}
            </Switch>
          </main>
        </div>
      ) : (
        <LoginContainer onLogin={onLogin} />
      )}
    </Fragment>
  );
}

export default App;