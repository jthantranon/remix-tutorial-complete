import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getQuests } from "~/models/quest.server"; // Import the MongoDB quest model

export const loader = async () => {
  return json({ quests: await getQuests() });
};

export default function QuestAdmin() {
  const { quests } = useLoaderData();
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Quest Admin
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <Outlet />
        </nav>
        <main className="col-span-4 md:col-span-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}