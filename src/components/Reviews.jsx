
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import img from "../movie.jpg"

const Reviews = () => {
  const { id } = useParams();
  const [revieww, setReview] = useState([])

  useEffect(() => {

    const fetchMovie = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=99cb9f567734a9ee5f2d74055523eb10`);
        const review = await response.json();
        setReview(review.results)
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchMovie();
  }, [id])

  return (<div>
    <ul>
      {revieww.length > 1 ? revieww.map((review) => (
        <li key={review.id}>
          <h3> Author: {review.author} </h3>
          <p> {review.content}</p></li>
      )) : <p> We don't have reviews for this movie</p>}
    </ul>
  </div>);
};

export default Reviews;