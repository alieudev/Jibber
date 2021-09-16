function UserPostsDisplay({ post, user }) {
    
    const msec = Date.parse(post.created_at)
    const renderDate = new Date(msec).toDateString()
 
    return (
    <div style={{ paddingBottom: 20 }}>
      <img className="post-avatar" src={user.image} alt={user.name} />
      <main style={{ marginLeft: 70 }}>
        <p>
          <b>{user.name}</b>
        </p>
        <p>
          @{user.handle}
        </p>
        <p>{post.content}</p>
        <div>
          <em>{renderDate}</em>
        </div>
      </main>
    </div>
  );
}

export default UserPostsDisplay;