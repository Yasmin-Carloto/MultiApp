import styled from 'styled-components';
import { IoIosReturnLeft } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import FeatureContainer from '../../components/FeatureContainer';
import FeatureTitle from '../../components/FeatureTitle';
import InputText from '../../components/InputText';
import DefaultButton from '../../components/DefaultButton';
import { fetchMovies } from '../../api/SearchMovie/fetchMovies';

const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  height: 60%;
`;

const MovieCard = styled.div`
  background: #f9f9f9;
  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 40%;
  margin: 1em;
  padding: 0.5em;
  border-radius: 1em;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1em 2em rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%; 
    height: auto;
    border-radius: 1em;
  }

  h3 {
    font-size: 12px;
    margin: 0.8em 0;
    word-break: break-all;
  }

  p {
    font-size: 14px;
    color: #555;
  }
`;

const MovieSearchEngine = () => {
  const [query, setQuery] = useState(''); 
  const [moviesList, setMoviesList] = useState([]); 
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const searchMovies = async () => {
    const responseMovies = await fetchMovies(query)        
    
    if(responseMovies.response.length <= 0){
      setMoviesList([])
      setError(true)
    }else{
      setMoviesList(responseMovies.response)      
      setError(false)
    }    
  }

  function onMovieQueryChange(inputValue){
    setQuery(inputValue)
    setError(false)
  }

  return (
    <FeatureContainer>
      <FeatureTitle text="Movie Search Engine" />
      <InputText
        inputValue={query} 
        onChangeFunction={onMovieQueryChange}
        inputPlaceholder="Search for a movie"
      />
      <DefaultButton buttonText="Search" buttonAction={searchMovies} />
      
      <MoviesContainer>
        {query && moviesList.map((movie) => (
          <MovieCard key={movie.id}>
            {movie.poster_path && <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} Poster`} /> }
            <h3>{movie.title}</h3> 
            {movie.release_date && <p>{new Date(movie.release_date).getFullYear()}</p>}
          </MovieCard>
        ))}

      </MoviesContainer>
      {moviesList.length == 0 && error && <p>Title {query} not found!</p>}
      <DefaultButton buttonText={<><IoIosReturnLeft /> Return</>} buttonAction={() => navigate("/carousel")}/>
    </FeatureContainer>
  );
};

export default MovieSearchEngine; // Exporta o componente MovieSearchEngine como padrão
