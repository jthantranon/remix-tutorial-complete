import { json } from "@remix-run/node";
const { mongodb } = require("~/db.mongo-server");
async function getMovies() {
  // const url = new URL(request.url);

  let db = await mongodb.db("sample_mflix");
  let collection = await db.collection("movies");
  let movies = await collection.find({}).limit(10).toArray();

  // console.log({movies});

  let searchedMovies = [];
  // let searchTerm = url.searchParams.get("search");
  // if (searchTerm) {
  //   let searchRegex = new RegExp(searchTerm, "i");
  //   searchedMovies = (await collection.find({ title: { $regex: searchRegex } }).limit(10).toArray());
  // }
  return movies;
  // return { movies, searchedMovies };
}

module.exports = {
  getMovies
};