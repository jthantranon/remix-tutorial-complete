// import { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";

import { getPost } from "~/models/post.server";

export const loader = async ({ params }) => {
  const post = await getPost(params.slug);
  const html = marked(post.markdown);
  return json({ post, html });
};

export default function PostSlug() {
  const { post, html } = useLoaderData();
  // const { slug, title } = useLoaderData();

  return (
    <main className="mx-auto max-w-4xl">
      <div className="background-image bg-base-100 rounded-b-box bg-cover border items-center justify-center">
        <div className="card w-196 glass">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-black">{post.title}</h2>
            <p className="text-slate-900" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <figure><img src="https://user-images.githubusercontent.com/1500684/157774694-99820c51-8165-4908-a031-34fc371ac0d6.jpg" alt="Shoes" /></figure>
        </div>
      </div>
    </main>
  );
}