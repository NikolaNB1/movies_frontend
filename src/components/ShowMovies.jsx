import { useContext, useEffect } from "react";
import MoviesContext from "../storage/MoviesContext";
import { getMovies } from "../service/moviesService";
import { Link } from "react-router-dom";

const ShowMovies = () => {
  const { movies, updateMovie } = useContext(MoviesContext);

  useEffect(() => {
    getMovies().then(({ data }) => {
      updateMovie(data);
    });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {movies?.map((movie, id) => (
        <div key={id} className="col m-5" style={{ width: "410px" }}>
          <div className="card shadow-sm">
            <div className="card-body bg-light border rounded border">
              <h3 className="card-text">{movie.title}</h3>
              <div className="mb-1 text-body-secondary">
                Director: {movie.director}
              </div>
              <p className="card-text mb-auto">
                Release date: {movie.release_date}
              </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link
                  className="btn btn-outline-success"
                  to={`/movies/${movie.id}`}
                >
                  View
                </Link>
                <Link
                  className="btn btn-outline-warning"
                  to={`edit/${movie.id}`}
                >
                  Edit
                </Link>
                {/* <button
                  className="btn btn-outline-danger"
                  type="delete"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ShowMovies;
