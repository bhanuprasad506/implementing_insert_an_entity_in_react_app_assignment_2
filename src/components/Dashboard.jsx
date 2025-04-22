import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';

const Dashboard = ({ movies }) => {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <h1>Movie Dashboard</h1>
      <button onClick={() => navigate('/add-movie')}>Add Movie</button>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
