import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main id="principal">
            <h2>Edgar Allan Poe</h2>
            <h1>The Raven</h1>
            <p>Adapted by Gabriel Duarte, Lara Mel, and Wanga Veniça</p>
            <div className="button-grup">
                <Link to="/help" className="button-playnow">
                    Play Now
                </Link>
                <Link to="/about" className="button-about">
                    About
                </Link>
            </div>
        </main>
    );
}

export default Home;