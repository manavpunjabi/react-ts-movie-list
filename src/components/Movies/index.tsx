import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./style.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const API_KEY = `42719e62`;
type Props = {
  movies: any;
  setMovies: any;
  setTempMovies: any;
};

const series = [
  `Avengers`,
  `Fast and Furious`,
  `Iron Man`,
  `Harry Potter`,
  `Black Panther`,
];

type MovieType = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

const Movies: React.FC<Props> = ({ movies, setMovies, setTempMovies }) => {
  useEffect(() => {
    const promises = series.map((serie) => {
      return fetch(
        `http://www.omdbapi.com/?s=${encodeURIComponent(
          serie
        )}&apikey=${API_KEY}&page=1`
      ).then((res) => res.json());
    });
    Promise.all(promises).then((movies: any) => {
      const updatedMovies:MovieType[] = movies
        .map((movie: any) => movie.Search)
        .flat(2)
        .map((movie: MovieType) => ({
          title: movie.Title,
          year: movie.Year,
          image: movie.Poster,
          imdb: movie.imdbID,
        }));
      setMovies(updatedMovies);
      setTempMovies(updatedMovies);
    });
  }, []);

  if (movies.length === 0) {
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="movies">
      {movies?.flat(2)?.map((movie: any, index: number) => (
        <Movie
          key={index}
          Title={movie.title}
          Year={movie.year}
          Poster={movie.image}
        />
      ))}
    </div>
  );
};

export default Movies;
