import axios from 'axios'

export const getStaticPaths = async () => {
    const data = await axios.get('http://127.0.0.1:8000/moviepicker').then((response) => {
        return response.data
    }).catch(err => console.log(err))

    console.log(data)


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
        <div>
            <h1>Movie</h1>
            <h3>{movie.title}</h3>
        </div>);
}

export default Detils;