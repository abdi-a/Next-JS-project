// app/projects/[slug]/page.tsx
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Project Details</h1>
      <p>Viewing project: {slug}</p>
    </div>
  );
}
