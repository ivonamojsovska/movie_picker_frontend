import { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import Link from 'next/link'



const Home = () => {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
    axios.get('http://localhost:8000/moviepicker').then(response => setMovies(response.data)).catch(err => console.error(err))
  }

  useEffect(() => {
    getMovies()
  }, [])


  return (<>
    <h3 className='text-center'>Movie Library</h3>
    <div className={styles.show_movies}>
      {movies.map(movie => {
        return (
          <Link href={`/${movie.id}`} key={movie.id}>
            <div className='card text-center' style={{ "width": "18rem" }} >
              <img className='card-img-top' src={movie.image} />
              <div className='card-body'>
                <h3 className='card-title'>{movie.title}</h3>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  </>);
}

export default Home;