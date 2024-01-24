import { NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import 'components/styles.css'
const Home = lazy(() => import("../pages/Home"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));
const Movies = lazy(() => import("../pages/Movies"));
const Reviews = lazy(() => import("../components/Reviews"));
const Cast = lazy(() => import("../components/Cast"));


export const App = () => {
  return (<div >
    <nav className="Nav">
      <NavLink className="NavItem" to="/">Home</NavLink>
      <NavLink className="NavItem" to="/movies">Movies</NavLink>
    </nav>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Suspense>
  </div>);
};
