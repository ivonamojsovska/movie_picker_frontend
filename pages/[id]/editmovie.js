import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { useRouter } from 'next/router';


const EditMovie = () => {
    const router = useRouter();
    const { id } = router.query

    const [movie, setMovie] = useState({ title: '', overview: '', release_date: '', rating: '', image: '' })
    const [editMovie, setEditMovie] = useState(null)


    const getMovie = async () => {
        const res = await axios.get(`http://127.0.0.1:8000/moviepicker/${id}`)
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
        await axios.put(
            `http://localhost:8000/moviepicker/${id}`,
            movie
        );
        router.push('/');
    };

    return (
        <>
            <Head>
                <title>Edit Movie</title>
            </Head>
            <h3 className="text-center">Edit {movie.title}</h3>
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
                <button type="submit" className="btn btn-primary">
                    Save Changes
                </button>
            </form>
        </>
    );
};

export default EditMovie;

