import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShowMovies from "./components/ShowMovies";
import { useContext, useEffect } from "react";
import MoviesContext from "./storage/MoviesContext";
import { getMovies } from "./service/moviesService";
import SignUp from "./register/SignUp";
import UserContext from "./storage/UserContext";
import SignIn from "./register/SignIn";
import Home from "./components/Home";

function App() {
  const movieContext = useContext(MoviesContext);
  const { signedIn } = useContext(UserContext);

  useEffect(() => {
    if (signedIn) {
      getMovies().then(({ data }) => {
        movieContext.updateMovie(data);
      });
    }
  }, [signedIn]);

  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/movies" element={<ShowMovies />}></Route>
      <Route path="/register" element={<SignUp />}></Route>
      <Route path="/login" element={<SignIn />}></Route>
    </Routes>
  );
}

export default App;
