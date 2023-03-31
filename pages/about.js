import Link from 'next/link'
import { jsxDEV } from 'react/jsx-dev-runtime';

const About = () => {
    return (
        <>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href='/addmovie'>Add Movie</Link>
                <Link href='/wishlist'>Wish List</Link>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 com-md-8">
                        <h1 className="text-center m-5">About Movie Picker</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-10 col-md-8">
                        <p>Welcome to our movie picker app! We understand that choosing a movie to watch can be a daunting task with so many options available. That's why we've created an easy-to-use platform that will help you find the perfect movie to watch based on your preferences.<br /><br />
                            With our app, you can filter movies by genre, year of release, rating, and even runtime. We also offer a search function that allows you to look for specific movies by title or actor.
                            <br /><br />
                            Our app is constantly updated with the latest releases and popular titles, so you can be sure that you're getting the most current recommendations. We also provide movie trailers, synopses, and reviews to help you make an informed decision.<br /><br />
                            Whether you're in the mood for a comedy, thriller, or romance, our movie picker app has got you covered. With just a few clicks, you can discover your new favorite movie and enjoy it from the comfort of your own home.</p>
                    </div>

                </div>


            </div>



        </>

    );
}

export default About;