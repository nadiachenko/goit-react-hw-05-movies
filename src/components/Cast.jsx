import { NavLink, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import img from "../movie.jpg"

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState('')

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=99cb9f567734a9ee5f2d74055523eb10`);
        const cast = await response.json();
        setCast(cast)
      } catch (error) {
        console.log(error.message);
      }
    }
    console.log(cast);
    fetchMovie();
  }, [id])

  return (<div>
    <ul>
      {cast && cast.cast.map((actor) => (
        <li key={actor.id}>
          <img src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}?api_key=99cb9f567734a9ee5f2d74055523eb10` : img} alt="actorimage" width='150' height='220' />
          <p>{actor.name} </p>
          <p> Character: {actor.character}</p></li>
      ))}
    </ul>

  </div>);
};

export default Cast;