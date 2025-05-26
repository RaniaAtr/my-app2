
import Navbar from "../components/navbar";
import FilmThumbnail from "../components/FilmThumbnail";
import FeaturedFilm from "../components/FeaturedFilm";


export default async function Featuredmovie() {
  const res = await fetch('http://localhost:3000/api/popular');

  const data = await res.json();

  return (
    <div>
        <Navbar/>
        <FeaturedFilm 
        titre="Titre du film"
        image=""
        description="kbvbk,kg"
        
        />

      <h1>Films Populaires</h1>
      <ul>
        {data.results?.map((movie) => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Note : {movie.vote_average}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '150px' }}
              />
            )}
          </li>
        ))}
      </ul>
      


    </div>
  );
}
export const dynamic='force-dynamic'