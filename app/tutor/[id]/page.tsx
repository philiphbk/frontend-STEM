import api from "../../../utils/api";
import { Tutor } from "../../../models/Tutor";

export default async function TutorDetails({
  params,
}: {
  params: { id: string };
}) {
  const { data: tutor }: { data: Tutor } = await api.get(
    `/tutors/${params.id}`
  );

  return (
    <div>
      <h1>{tutor.name}</h1>
      <p>{tutor.subject}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const { data: tutors }: { data: Tutor[] } = await api.get("/tutors");

  return tutors.map((tutor) => ({
    id: tutor.id,
  }));
}
