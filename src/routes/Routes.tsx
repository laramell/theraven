import {Route, Routes} from "react-router-dom";
import Home from "../components/Home/Home";
import Animation from "../components/Animation/Animation";
import About from "../components/About/About";
import Movie from "../components/Movie/Movie";
import Help from "../components/Help/Help";

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/play" element={<Animation />} />
            <Route path="/movie" element={<Movie />} />
            <Route path="/help" element={<Help />} />
        </Routes>
    );
};
export default MyRoutes;