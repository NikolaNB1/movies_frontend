import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../service/moviesService";

const AddMovie = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState({
    title: "",
    director: "",
    image_url: "",
    duration: "",
    release_date: "",
    genre: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (movies.title.length === 0) {
      return alert(`Polje Title ne moze biti prazno`);
    }
    if (movies.director.length === 0) {
      return alert(`Polje Director ne moze biti prazno`);
    }
    if (movies.image_url.length === 0) {
      return alert(`Polje Image url mora biti url`);
    }
    if (movies.duration.length === 0) {
      return alert(`Polje Duration ne moze biti prazno`);
    }
    if (movies.duration < 1 || movies.duration > 300) {
      return alert(`Polje Duration mora biti izmedju 1 i 300 minuta`);
    }
    if (movies.release_date.length === 0) {
      return alert(`Polje Release date ne moze biti prazno`);
    }
    if (movies.genre.length === 0) {
      return alert(`Polje Genre ne moze biti prazno`);
    }

    addMovie(
      movies.title,
      movies.director,
      movies.image_url,
      movies.duration,
      movies.release_date,
      movies.genre
    );
    setMovies({
      title: "",
      director: "",
      image_url: "",
      duration: "",
      release_date: "",
      genre: "",
    });
    navigate("/");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovies((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <form
        className="container mt-5"
        style={{ width: "300px" }}
        onSubmit={(event) => handleSubmit(event, movies)}
      >
        <div className="form-floating mt-3">
          <input
            name="title"
            value={movies.title}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Title"
          />
          <label>Title</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="director"
            value={movies.director}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Director"
          />
          <label>Director</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="image_url"
            value={movies.image_url}
            type="url"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Image url"
          />
          <label>Image url</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="duration"
            value={movies.duration}
            type="number"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Duration"
          />
          <label>Duration</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="release_date"
            value={movies.release_date}
            type="date"
            className="form-control"
            onChange={handleInputChange}
          />
          <label>Release date</label>
        </div>
        <div className="form-floating mt-3">
          <input
            name="genre"
            value={movies.genre}
            type="text"
            className="form-control"
            onChange={handleInputChange}
            placeholder="Genre"
          />
          <label>Genre</label>
        </div>
        <div>
          <button
            className="w-100 btn btn-lg btn-success mt-3"
            type="submit"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddMovie;
