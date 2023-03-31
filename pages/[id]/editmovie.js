import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link'


const EditMovie = () => {
    const router = useRouter();
    const { id } = router.query

    const [movie, setMovie] = useState({ title: '', overview: '', release_date: '', rating: 0, image: '' })
    const [editMovie, setEditMovie] = useState(null)


    const getMovie = async () => {
        const res = await axios.get(`https://moviepickerbackend.onrender.com/moviepicker/${id}`)
        const data = await res.data

        setEditMovie(data)
        setMovie({
            title: data.title,
            overview: data.overview,
            release_date: data.release_date,
            rating: data.rating,
            image: data.image,
        })
    }

    useEffect(() => {
        getMovie()
    }, [id])


    const handleChange = (event) => {
        setMovie({ ...movie, [event.target.name]: event.target.value })

    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(
                `https://moviepickerbackend.onrender.com/moviepicker/${id}`,
                movie
            );
            await router.push(`/${id}`);
        } catch (err) {
            console.log(err)
        }

    };

    return (
        <>
            <Head>
                <title>Edit Movie</title>
            </Head>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href='/wishlist'>Wish List</Link>
            </nav>
            <h3 className="text-center">Edit {movie.title}</h3>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-sm-10 com-md-8'>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="title"
                                    value={movie.title}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="overview">Overview</label>
                                <textarea
                                    className="form-control"
                                    name="overview"
                                    value={movie.overview}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="release_date">Release Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="release_date"
                                    value={movie.release_date}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="rating"
                                    value={movie.rating}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="image"
                                    value={movie.image}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary my-3">
                                Save Changes
                            </button>
                        </form>
                    </div>

                </div>

            </div>

        </>
    );
};

export default EditMovie;

