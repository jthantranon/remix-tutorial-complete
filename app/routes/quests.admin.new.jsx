import { json } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { createQuest } from "~/models/quest.server"; // Import the MongoDB quest model

export const loader = async ({ request }) => {
  const formData = new URLSearchParams(await request.text());
  const newQuest = Object.fromEntries(formData);
  const createdQuest = await createQuest(newQuest);

  return json(createdQuest);
};

export default function NewQuestAdmin() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newQuest = Object.fromEntries(formData);
    const response = await fetch("", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    if (result.id) {
      navigate(`/admin/quests/${result.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" required />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" required></textarea>
      </div>
      <button type="submit">Create Quest</button>
    </form>
  );
}