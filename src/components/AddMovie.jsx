import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddMovie = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    director: '',
    genre: '',
    year: '',
    synopsis: '',
    poster: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted movie:', form); // Placeholder for now
  };

  return (
    <div className="add-movie-form">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <input name="director" placeholder="Director" value={form.director} onChange={handleChange} required />
        <select name="genre" value={form.genre} onChange={handleChange} required>
          <option value="">Select Genre</option>
          <option>Action</option>
          <option>Drama</option>
          <option>Comedy</option>
          <option>Horror</option>
          <option>Sci-Fi</option>
        </select>
        <input type="number" name="year" placeholder="Release Year" value={form.year} onChange={handleChange} required />
        <textarea name="synopsis" placeholder="Synopsis" value={form.synopsis} onChange={handleChange} required />
        <input type="url" name="poster" placeholder="Poster URL" value={form.poster} onChange={handleChange} required />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMovie;
