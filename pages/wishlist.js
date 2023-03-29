import { useRouter } from 'next/router'
import { useState } from 'react'


const Wishlist = () => {
    const router = useRouter()
    const query = router.query
    const queryArr = Object.values(query)
    console.log(queryArr)




    return (<>

        {queryArr.map(title => {
            return (
                <li>{title}</li>
            )
        })}

    </>
    );
}

export default Wishlist;