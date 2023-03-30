import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Link from 'next/link'


const Wishlist = () => {

    const router = useRouter()
    const query = router.query
    const queryArr = Object.values(query)
    console.log(queryArr)

    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        setWishlist(queryArr)
    }, [])

    return (<>

        <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href='/addmovie'>Add Movie</Link>
            <Link href='/wishlist'>Wish List</Link>
        </nav>
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-sm-8 col-md-6 text-center m-3'>
                    <h3>Wish List</h3>
                </div>
            </div>
            <div className='row justify-content-center text-center'>
                <div className='col-sm-8 col-md-6'>
                    <ul className='list-unstyled'>
                        {wishlist.map(title => {
                            return (
                                <li><h5>{title}</h5></li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </div>


    </>
    );
}

export default Wishlist;