import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';

const EditMovie = () => {
  const router = useRouter();
  const [movie, setMovie] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    overview: '',
    release_date: '',
    rating: '',
    image: '',
  });

  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`http://localhost:8000/moviepicker/${router.query.id}`)
        .then((response) => {
          setMovie(response.data);
          setFormData({
            title: response.data.title,
            overview: response.data.overview,
            release_date: response.data.release_date,
            rating: response.data.rating,
            image: response.data.image,
          });
        })
        .catch((err) => console.error(err));
    }
  }, [router.query.id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedMovie = formData;
    await axios.put(
      `http://localhost:8000/moviepicker/${router.query.id}`,
      updatedMovie
    );
    router.push('/');
  };

  if (!movie) {
    return <div>loadin</div>;
  }

  return (
    <>
      <Head>
        <title>Edit Movie</title>
      </Head>
      <h3 className="text-center">Edit Movie</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="overview">Overview</label>
          <textarea
            className="form-control"
            id="overview"
            value={formData.overview}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="release_date">Release Date</label>
          <input
            type="date"
            className="form-control"
            id="release_date"
            value={formData.release_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Changes
        </button>
      </form>
    </>
  );
};

export default EditMovie;




