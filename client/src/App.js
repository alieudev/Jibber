import { useState, useEffect, Fragment } from "react"
import { Switch, Route, Redirect } from "react-router-dom";
import LoginContainer from './Components/LoginContainer'
import PostsContainer from "./Components/PostsContainer"
import Navbar from "./Components/Navbar"
import SideBar from "./Components/SideBar"
import UserDisplay from './Components/UserDisplay'
import LinkUserData from './Components/LinkUserData'
// import Signup from "./Components/Signup";

function App() {
  const [user, setUser] = useState(null)
  const [fetchUsers, setFetchUsers] = useState(null)
  const [posts, setPosts] = useState([])

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

  // FETCHES ALL POSTS
  	useEffect(() => {
    fetch("/posts")
    .then((r) => r.json())
    .then((data) =>{ 
      let newestFirst = data.sort((a, b) => b.id - a.id)
      setPosts(newestFirst) 
    })
  },[])

  function onLogin(newUser) {
    setUser(newUser)
  }

  function onLogout() {
    setUser(null)
  }

<<<<<<< Updated upstream
  function appOnDeletePost(data) {
    let newArr = posts.filter(post => post.id !== data)
    setPosts(newArr)
  }

  function appOnAddPost(data) {
    setPosts([data, ...posts])
  }

  function appOnEditPost(data) {
    let editedPostArr = posts.filter(post => parseInt(post.id) !== parseInt(data.id))
    setPosts([data, ...editedPostArr])
  }

  function updateUser(data) {
=======
  function onUpdateUser(data){
>>>>>>> Stashed changes
    setUser(data)
  }

  return (
    <Fragment>
      <Navbar onLogout={onLogout} user={user} />
      {user && fetchUsers ? (
        <div className="main-div" >
          <aside>
<<<<<<< Updated upstream
            <SideBar user={user} updateUser={updateUser} ></SideBar>
=======
            <SideBar user={user} onUpdateUser={onUpdateUser}></SideBar>
>>>>>>> Stashed changes
          </aside>
          <main>
            <Switch>
              <Route exact path ="/">
                <PostsContainer user={user} posts={posts} setPosts={setPosts} appOnDeletePost={appOnDeletePost} appOnAddPost={appOnAddPost} appOnEditPost={appOnEditPost} />
              </Route>
              <Route exact path ="/users">
                <LinkUserData fetchUsers={fetchUsers} />
              </Route>
              <Redirect from="/x-users/:id" to="/users/:id" />
              <Route exact path="/users/:id">
               <UserDisplay users={fetchUsers} user={user} posts={posts} appOnDeletePost={appOnDeletePost} appOnAddPost={appOnAddPost} appOnEditPost={appOnEditPost} />
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