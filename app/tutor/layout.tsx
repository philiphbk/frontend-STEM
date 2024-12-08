export default function TutorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Tutors</h1>
      {children}
    </div>
  );
}
