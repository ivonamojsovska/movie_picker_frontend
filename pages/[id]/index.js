import axios from 'axios'
import Link from 'next/link'

export const getStaticPaths = async () => {
    const data = await axios.get('http://127.0.0.1:8000/moviepicker').then((response) => {
        return response.data
    }).catch(err => console.log(err))

    const paths = data.map((movie) => {
        return {
            params: { id: movie.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`http://127.0.0.1:8000/moviepicker/${id}`)
    const data = await res.json()

    return {
        props: { movie: data }
    }
}

const Detils = ({ movie }) => {

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-sm-12 col-md-6 d-flex justify-content-center'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='movie_image' >
                                <img src={movie.image} />
                            </div>
                        </div>
                        <div className='col-8'>
                            <div className='m-3'>
                                <h3 className='text-center'>{movie.title}</h3>
                                <div className='d-flex justify-content-center'>
                                    <h6>Rating: {movie.rating}</h6>
                                    <h6>Release Date: {movie.release_date}</h6>
                                </div>
                                <p>{movie.overview}</p>
                            </div>
                            <div className='text-center'>
                                <Link href={movie.id + '/editmovie'}>
                                    <button className='btn btn-secondary'>Edit Movie</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>);
}

export default Detils;