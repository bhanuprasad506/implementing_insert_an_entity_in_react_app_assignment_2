import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovie from './components/AddMovie';

const App = () => {
  const dummyMovies = [
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Sci-Fi',
      year: 2010,
      synopsis: 'Dream within a dream concept thriller.',
      poster: 'https://example.com/inception.jpg',
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard movies={dummyMovies} />} />
        <Route path="/add-movie" element={<AddMovie />} />
      </Routes>
    </Router>
  );
};

export default App;
