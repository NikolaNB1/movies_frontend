import { API } from "../shared/api";

export const getMovies = () => {
  return API.get("/movies");
};

export const addMovie = (
  title,
  director,
  image_url,
  duration,
  release_date,
  genre
) => {
  return API.post("/movies", {
    title,
    director,
    image_url,
    duration,
    release_date,
    genre,
  });
};

export const registerUser = (name, email, password) => {
  return API.post("/register", {
    name,
    email,
    password,
  });
};

export const logIn = (email, password) => {
  return API.post("/login", {
    email,
    password,
  });
};

export const getMovieById = (id) => {
  return API.get(`/movies/${id}`);
};

export const editMovieById = (id, movie) => {
  return API.put(`/movies/${id}`, movie);
};

export const deleteMovieById = (id) => {
  return API.delete(`/movies/${id}`);
};
