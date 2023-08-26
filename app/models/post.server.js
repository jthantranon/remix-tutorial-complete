import { prisma } from "~/db.server";

async function getPosts() {
  return prisma.post.findMany();
}

async function getPost(slug){
  return prisma.post.findUnique({where:{slug}});
}

async function createPost(post) {
  return prisma.post.create({ data: post });
}

module.exports = {
  getPosts,
  getPost,
  createPost
};