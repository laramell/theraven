import { Link } from 'react-router-dom';
import './Help.css'
import {useEffect} from "react";


const Help = () => {
    useEffect(() => {
        // Adiciona a classe "about" ao body quando o componente é montado

        const ravenContainer = document.getElementById("raven-container");

        document.body.classList.add('help');
        if (ravenContainer) {
            ravenContainer.classList.add('help');
        }
        // Remove a classe "about" do body quando o componente é desmontado
        return () => {
            document.body.classList.remove('help');

            if (ravenContainer) {
                ravenContainer.classList.remove('help');
            }
        };
    }, []);

    return (
        <main id="help" className="">
            <h1>How to use the <br/> keyframe editor?</h1>
            <p>
                <li>Order the frames in any desired order;</li>
                <li>Click 'Play now' to start it and 'Reset' to go back to the beginning;</li>
                <li>You can duplicate and delete frames;</li>
                <li>You can also decide the frame rate to any desired speed.</li>
                We hope you enjoy!
            </p>
            <div className="button-grup">
                <Link to="/play" className="button-playnow">
                    Play Now
                </Link>
            </div>
        </main>
    );
}

export default Help;