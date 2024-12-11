import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import MyRoutes from "./routes/Routes";

function App() {
   return (
       <div className="geral">
           <div className="" id="raven-container">
               <img src="/assets/raven.svg" alt="Raven"/>
           </div>
           <Router>
               <MyRoutes/>
           </Router>
       </div>

);
}

export default App;
