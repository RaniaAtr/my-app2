import axios from 'axios';

export async function GET() {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTBhMTJmZjIxODA5ZTc4N2Y1NDI5NWFiODViNDAyMiIsIm5iZiI6MTc0NzcyMjk1OC41MDEsInN1YiI6IjY4MmMyMmNlYWRmNTdjYTcwOWY1NjFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rWU9JwFvU_EatZ-mzqH7Hj7-kTd4IROr9hIENl6_CQ0'
    }
  };

  try {
    const res = await axios.request(options);
    return Response.json(res.data);
  } catch (err) {
    return Response.json({ error: 'Erreur lors de la récupération avec Axios' }, { status: 500 });
  }
}
