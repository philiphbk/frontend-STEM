"use client"; // For handling form submission in client-side

import { useState } from "react";
import { createTutor } from "@/utils/tutorService";

export default function CreateTutor() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTutor({ name, subject, email });
      alert("Tutor created successfully!");
    } catch (error) {
      console.error("Failed to create tutor:", error);
      alert("Error creating tutor.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Tutor</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Subject</label>
        <input
          type="text"
          value={subject}
          placeholder="Subject"
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Create Tutor</button>
    </form>
  );
}
