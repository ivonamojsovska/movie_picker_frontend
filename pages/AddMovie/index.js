import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: '',
    overview: '',
    release_date: '',
    rating: '',
    image: '',
  });
  const router = useRouter();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8000/moviepicker', formData);
      console.log('Movie added');
      setFormData({
        title: '',
        overview: '',
        release_date: '',
        rating: '',
        image: '',
      });
      router.push('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          className='form-control'
          id='title'
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='overview'>Overview</label>
        <textarea
          className='form-control'
          id='overview'
          name='overview'
          rows='3'
          value={formData.overview}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className='form-group'>
        <label htmlFor='release_date'>Release Date</label>
        <input
          type='date'
          className='form-control'
          id='release_date'
          name='release_date'
          value={formData.release_date}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='rating'>Rating</label>
        <input
          type='number'
          step='0.1'
          className='form-control'
          id='rating'
          name='rating'
          value={formData.rating}
          onChange={handleChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='image'>Image URL</label>
        <input
          type='text'
          className='form-control'
          id='image'
          name='image'
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        Add Movie
      </button>
    </form>
  );
};

export default AddMovie;










