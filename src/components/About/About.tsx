import { Link } from 'react-router-dom';
import './About.css'
import {useEffect} from "react";


const About = () => {
    useEffect(() => {
        // Adiciona a classe "about" ao body quando o componente é montado

        const ravenContainer = document.getElementById("raven-container");

        document.body.classList.add('about');
        if (ravenContainer) {
            ravenContainer.classList.add('about');
        }
        // Remove a classe "about" do body quando o componente é desmontado
        return () => {
            document.body.classList.remove('about');

            if (ravenContainer) {
                ravenContainer.classList.remove('about');
            }
        };
    }, []);

    return (
        <main id="about" className="">
            <h2>Edgar Allan Poe</h2>
            <h1>The Raven</h1>
            <p>
                «The Raven» illustrates the feeling of intense grief and loss, while other symbols throughout the
                poem reinforce a melodramatic mood that emphasizes the main character’s grief and loss. The poem
                explores the world of emotional wars that individuals face in all walks of life when losing a loved
                one, the fight for control over the emotions of grief and loss. Written by the American writer Edgar
                Allan Poe, first published in 1845, the poem is often noted for its musicality, its graceful
                language and its the connection it makes with the natural and supernatural atmospheres.
            </p>
            <div className="button-grup">
                <Link to="/help" className="button-playnow">
                    Play Now
                </Link>
            </div>
        </main>
    );
}

export default About;