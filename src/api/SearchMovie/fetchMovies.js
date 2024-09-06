import axios from "axios";

export async function fetchMovies(movie) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_KEY}`,
        },
      }
    )
    return {
      status: 200,
      response: response.data.results
    }
  } catch (error) {
    return {
      error: error,
      status: 404,
      message: "Not found"
    }
  }
}