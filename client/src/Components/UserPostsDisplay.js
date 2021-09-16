function UserPostsDisplay({ post, user }) {
    
  const msec = Date.parse(post.created_at)
  const parseDate = new Date(msec).toDateString()
  const splitDate = parseDate.split(" ")
  const renderDate = `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`
 
  return (
    <div style={{ paddingBottom: 20 }}>
      <img className="post-avatar" src={user.image} alt={user.name} />
      <main style={{ marginLeft: 70 }}>
        <div style={{ paddingTop: 20 }}>
          <b>{user.name}</b>
        </div>
        <div style={{ color: '#383838' }} >
          @{user.handle}
        </div>
        <p>{post.content}</p>
        <div style={{ color: '#484848' }} >
          <em>{renderDate}</em>
        </div>
      </main>
    </div>
  );
}

export default UserPostsDisplay;