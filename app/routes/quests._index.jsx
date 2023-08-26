import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getQuests } from "~/models/quest.server"; // Import the MongoDB quest model

// Loader function to fetch quests
export const loader = async () => {
  const quests = await getQuests();
  return json({ quests });
};

export default function QuestsIndex() {
  const { quests } = useLoaderData();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Quests
      </h1>
      <ul>
        {quests.map((quest) => (
          <li key={quest.id}>
            <Link to={quest.id} className="text-blue-600 underline">
              {quest.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
    </div>
  );
}