import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios
      .get('http://localhost:8000/moviepicker')
      .then((response) => setMovies(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Head>
        <title>Movie Library</title>
        <link />
      </Head>

      <h3 className='text-center'>Movie Library</h3>
      <div className={styles.show_movies}>
        {movies.map((movie) => {
          return (
            <div className='card' style={{ width: '18rem' }} key={movie.id}>
              <img className='card-img-top' src={movie.image} alt={movie.title} />
              <div className='card-body'>
                <h3 className='card-title'>{movie.title}</h3>
                <div className='d-flex justify-content-between'>
                <Link href={{ pathname: '/about', query: { id: movie.id } }}>
                    <button className='btn btn-primary mr-2'>View Details</button>
                  </Link>
                  <Link href={{ pathname: '/EditMovie', query: { id: movie.id } }}>
                    <button className='btn btn-secondary'>Edit Movie</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Link href='/AddMovie'>
        <button className='btn btn-primary mt-3'>Add Movie</button>
      </Link>
    </>
  );
};

export default Home;






