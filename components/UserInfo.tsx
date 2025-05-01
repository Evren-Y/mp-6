export default function UserInfo({ user }: { user: any }) {
    return (
      <div>
        <h2>Welcome, {user.name}!</h2>
        <img src={user.picture} alt="Profile" style={{ borderRadius: "50%", width: 100 }} />
        <p>Email: {user.email}</p>
      </div>
    );
  }
  