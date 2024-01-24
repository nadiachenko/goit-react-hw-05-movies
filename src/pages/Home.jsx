import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";


const Home = () => {
    const [movies, setMovies] = useState([])
    const location = useLocation();

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const response = await fetch("https://api.themoviedb.org/3/trending/all/day?api_key=99cb9f567734a9ee5f2d74055523eb10");
                const movies = await response.json();
                setMovies(movies.results)
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchMovies();
    }, [])

    return (
        <div>
            <h2> Trending </h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.name || movie.title}</Link></li>
                ))}
            </ul>
        </div>
    );
};


export default Home;