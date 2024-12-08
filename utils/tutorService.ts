import api from "../utils/api";
import { Tutor } from "../models/Tutor";

// Fetch all tutors
export async function fetchTutors(): Promise<Tutor[]> {
  const response = await api.get("/tutors");
  return response.data;
}

// Fetch a single tutor by ID
export async function fetchTutorById(id: number): Promise<Tutor> {
  const response = await api.get(`/tutors/${id}`);
  return response.data;
}

// Create a new tutor
export async function createTutor(tutor: Partial<Tutor>): Promise<Tutor> {
  const response = await api.post("/tutors", tutor);
  return response.data;
}
