import Link from 'next/link'
import { jsxDEV } from 'react/jsx-dev-runtime';
const Navbar = () => {

    return (<nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/wishlist">Wishlist</Link>
    </nav>);
}

export default Navbar;