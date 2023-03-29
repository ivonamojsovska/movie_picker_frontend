import { useRouter } from 'next/router'
import { useState } from 'react'


const Wishlist = () => {
    const router = useRouter()
    const query = router.query
    const title = query.title

    const wishlist = query.wishlistArr




    return (<>
        {
            <h1>{title}</h1>
        }



    </>
    );
}

export default Wishlist;