import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import styles from '../../styles/Home.module.css';
import { useRouter } from 'next/router';

const EditMovie = () => {
  const router = useRouter();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (router.query.id) {
      axios
        .get(`http://localhost:8000/moviepicker/${router.query.id}`)
        .then((response) => setMovie(response.data))
        .catch((err) => console.error(err));
    }
  }, [router.query.id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Edit Movie</title>
      </Head>
      <h3 className="text-center">Edit Movie</h3>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            defaultValue={movie.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            defaultValue={movie.description}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="image"
            defaultValue={movie.image}
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
