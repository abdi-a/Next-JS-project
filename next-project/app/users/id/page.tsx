// app/users/[id]/page.tsx
export default async function UserProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Get the id from the URL (e.g., "123")
  return (
    <div style={{ padding: "40px" }}>
      <h1>User Profile</h1>
      <p>Viewing user ID: {id}</p>
    </div>
  );
}