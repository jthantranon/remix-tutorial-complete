// https://github.com/mongodb-developer/remix/blob/main/app/routes/movies/index.tsx
// https://www.mongodb.com/developer/products/mongodb/building-remix-applications/

const { useLoaderData, Form } = require("@remix-run/react");
const { json } = require("@remix-run/node");
// const { mongodb } = require("~/db.mongo-server");
import { getMovies } from "~/models/movies.server";
// const MovieComponent = require("~/components/movie");

export const loader = async () => {
  // let rawMovies = await getMovies();
  // console.log({ rawMovies });
  // return json({ movies: await getMovies(), searchedMovies: [] });
  return json(await getMovies());
};

export default function Movies() {
  let movies = useLoaderData();
  // console.log({uDat});
  // let { movies, searchedMovies } = uDat;
  // console.log({ movies });
  return (
    <div>
      <h1>Movies</h1>
      <h2>Fetch ten movies</h2>
      <p className="mb-2">Here are some movies from `sample_mflix.movies`</p>
      {movies.map((movie) => {
        return (
          <div key={movie._id}>
            {movie.title} ({movie.year})
            {/*<Link to={`/movies/${movie._id}`}>*/}
            {/*  {movie.title} ({movie.year})*/}
            {/*</Link>*/}
          </div>
        )

        //return <MovieComponent key={movie._id} {...movie} />;
      })}

      <hr />
      {/*<h2>Search for a movie</h2>*/}
      {/*<Form>*/}
      {/*  <input type="text" name="search" placeholder="Partial title" />*/}
      {/*  <button type="submit">Search</button>*/}
      {/*</Form>*/}
      {/*{!!searchedMovies.length &&*/}
      {/*  searchedMovies.map((movie) => {*/}
      {/*    return (*/}
      {/*      <div key={movie._id}>*/}
      {/*        <Link to={`/movies/${movie._id}`}>*/}
      {/*          {movie.title} ({movie.year})*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })}*/}
    </div>
  );
}

// module.exports = {
//   loader,
//   default: Movies,
// };