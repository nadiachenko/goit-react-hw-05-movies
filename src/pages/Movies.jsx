import { useState, useEffect } from "react";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import 'components/styles.css'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const fetchMovies = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}&api_key=99cb9f567734a9ee5f2d74055523eb10`);
            const movies = await response.json();
            setMovies(movies.results)
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const updateQueryString = e => {
        if (e.target.value === "") {
            setSearchParams({});
            setMovies([])
        }
        setSearchParams({ query: e.target.value })
    };


    return (
        <div className="InputContainer">
            <input className="Input" type="text" onChange={updateQueryString} />
            <button className="Button" onClick={fetchMovies}>Search</button>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}><Link to={`${movie.id}`} state={{ from: location }}>{movie.name || movie.title}</Link></li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;