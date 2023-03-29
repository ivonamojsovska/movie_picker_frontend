import { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import Link from 'next/link'




const Home = () => {
  const [movies, setMovies] = useState([])
  const [wishlist, setWishlist] = useState([])

  const getMovies = () => {
    axios.get('http://localhost:8000/moviepicker').then(response => setMovies(response.data)).catch(err => console.error(err))
  }

  const handleDelete = (e, deletedMovie) => {
    axios.delete(`http://localhost:8000/moviepicker/${e.target.value}`).then(response => {
      console.log(response)
      setMovies(movies.filter(movie => {
        return movie.id !== deletedMovie.id
      }))
    })
  }

  const wishlistArr = []
  const handleWishlist = (movie) => {
    wishlistArr.push(movie.title)
    console.log(wishlistArr)

  }
  console.log(wishlistArr)









  useEffect(() => {
    getMovies()
  }, [])


  return (<>
    <div className='d-flex'>
      <h3 className='text-center'>Movie Library</h3>
      <Link href='/addmovie'><button className='btn btn-secondary mx-5'>Add Movie</button></Link>
      {/* <Link href={{ pathname: '/wishlist', query: { state: wishlist, arr: wishlistArr } }}><button>Wishlist</button></Link> */}
    </div>
    <div className={styles.show_movies}>
      {movies.map(movie => {
        return (
          <div key={movie.id}>
            <Link href={`/${movie.id}`}>
              <div className='card text-center' style={{ "width": "18rem" }} >
                <img className='card-img-top' src={movie.image} />
                <div className='card-body'>
                  <h3 className='card-title'>{movie.title}</h3>
                </div>
              </div>
            </Link>
            <div className='d-flex justify-content-center gap-5 mt-3'>
              <button className='btn btn-danger' onClick={(e) => { handleDelete(e, movie) }} value={movie.id}>Delete</button>
              <button className='btn btn-secondary' onClick={() => { handleWishlist(movie) }}>Wishlist</button>
            </div>
          </div>
        )
      })}
    </div>
    <div>
      <h3>Wishlist: {wishlist.title}</h3>
    </div>
  </>);
}

export default Home;