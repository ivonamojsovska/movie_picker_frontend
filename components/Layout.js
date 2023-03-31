import Navbar from "./Navbar";
import Footer from "./Footer";
import { jsxDEV } from 'react/jsx-dev-runtime';
const Layout = ({ children }) => {
    return (<>
        {/* <Navbar></Navbar> */}
        {children}
        <Footer></Footer>
    </>);
}

export default Layout;