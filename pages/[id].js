import axios from 'axios'

export const getStaticPaths = async () => {
    const res = axios.get('http://localhost:8000/moviepicker').then(response => {
        return response.data
    })

    const data = await res.json()

    const paths = data.map(movie => {
        return {
            params: { id: movie.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}




// export const getStaticProps = async (context) => {
//     const id = context.params.id
//     const res = await fetch(`http://localhost:8000/moviepicker/${id}`)
//     const data = await res.json()

//     return {
//         props: { movie: data }
//     }

// }


const Detils = () => {

    return (<div>
        <h1>Movie</h1>


    </div>);
}

export default Detils;