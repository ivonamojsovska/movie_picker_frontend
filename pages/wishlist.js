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
            <Link href='/wishlist'>Wishlist</Link>
        </nav>
        {wishlist.map(title => {
            return (
                <li>{title}</li>
            )
        })}

    </>
    );
}

export default Wishlist;