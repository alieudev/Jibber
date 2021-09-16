import { Link } from 'react-router-dom'

const LinkUserData = ({ fetchUsers }) =>{
    return (
      <>
        { fetchUsers.map(user => (
          <div key={ user.id }>
            <h4>Posts by: <Link to={`/users/${user.id}`}>{user.handle}</Link></h4>
          </div>
        ))}
      </>
    )
  }

  export default LinkUserData