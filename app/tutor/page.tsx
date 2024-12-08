import { Tutor } from "../../models/Tutor";
import { fetchTutors } from "@/utils/tutorService";

export default async function TutorList() {
  let tutors: Tutor[] = [];

  try {
    tutors = await fetchTutors(); // Use the service function
  } catch (error) {
    console.error("Failed to fetch tutors:", error);
    return <p>Failed to load tutors. Please try again later.</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold">Available Tutors</h1>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tutors.map((tutor) => (
          <div key={tutor.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold">{tutor.name}</h2>
            <p className="text-gray-600">{tutor.subject}</p>
            <a
              href={`/tutor/${tutor.id}`}
              className="text-blue-500 mt-2 inline-block"
            >
              View Profile
            </a>
          </div>
        ))}
      </main>
    </div>
  );
}
