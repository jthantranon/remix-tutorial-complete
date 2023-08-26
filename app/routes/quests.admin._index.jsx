import { Link } from "@remix-run/react";

export default function QuestAdminIndex() {
  return (
    <p>
      <Link to="new" className="text-blue-600 underline">
        Create a New Quest
      </Link>
    </p>
  );
}
