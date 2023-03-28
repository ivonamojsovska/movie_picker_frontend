import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';



const AddMovie = () => {
    const router = useRouter();

    const [movie, setMovie] = useState({
        title: '',
        overview: '',
        release_date: '',
        rating: '',
        image: '',
    });

    const handleChange = (event) => {
        setMovie({ ...movie, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/moviepicker', movie);
            setMovie({
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
                    value={movie.title}
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
                    value={movie.overview}
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
                    value={movie.release_date}
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
                    value={movie.rating}
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
                    value={movie.image}
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
