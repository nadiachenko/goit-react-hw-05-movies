import { useState, useEffect, useRef } from "react";
import { lazy, Suspense } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import img from "../../movie.jpg"
import css from '../MovieDetails/MovieDetails.module.css'

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState('')
  const location = useLocation();
  const backLinkLocation = useRef(location.state ? location.state.from : "/")

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=99cb9f567734a9ee5f2d74055523eb10`);
        const movie = await response.json();
        setMovie(movie)
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovie();
  }, [id])

  return (
    <div>
      <Link className={css.BackLink} to={backLinkLocation.current}>Go back</Link>
      <div className={css.Content} ><img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}?api_key=99cb9f567734a9ee5f2d74055523eb10` : img} alt="movieporster" width='300' height='420' />
        <div>
          <h2>{movie.name || movie.title}</h2>
          <p> User Score {movie.vote_average > 1 ? Math.round(movie.vote_average * 10) : 0}%</p>
          <h2>Overview</h2>
          <p>{movie.overview} </p>
          <h2>Genres</h2>
          <ul className={css.Genres}>
            {movie.genres && movie.genres.map((genre) => (
              <li className={css.Genre} key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <h2>Additional information</h2>
      <ul>
        <li ><Link to="Cast">Cast</Link></li>
        <li ><Link to="Reviews">Reviews</Link></li>
      </ul>
      <div className={css.Container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;