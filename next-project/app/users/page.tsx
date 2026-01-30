interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UsersPage() {
  // Artificial delay to show loading state
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // 1. Fetch data directly in the component
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
