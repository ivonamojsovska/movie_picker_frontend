import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';



const AddMovie = () => {
    const router = useRouter();

    const [movie, setMovie] = useState({
        title: '',
        overview: '',
        release_date: '',
        rating: 0,
        image: '',
    });

    const handleChange = (event) => {
        setMovie({ ...movie, [event.target.name]: event.target.value });

    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://127.0.0.1:8000/moviepicker', movie).then((res) => {
                console.log(res)
            })
            event.target.reset()
            router.push('/');
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    className='form-control'
                    name='title'
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='overview'>Overview</label>
                <textarea
                    className='form-control'
                    name='overview'
                    rows='3'
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className='form-group'>
                <label htmlFor='release_date'>Release Date</label>
                <input
                    type='date'
                    className='form-control'
                    name='release_date'
                    onChange={handleChange}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='rating'>Rating</label>
                <input
                    type='number'
                    step='0.1'
                    className='form-control'
                    name='rating'
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
