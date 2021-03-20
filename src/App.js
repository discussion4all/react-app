import './App.css';
import './Assest/Css/Style.css'
import Header from "./Component/Header"
import Home from "./Component/Home"
import Footer from "./Component/Footer"

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>

    <Header />
            <Switch>
              <Route path="/Home">
                <Home />
              </Route>
              
            </Switch>
          
          <Footer/>
          <div className="App"></div>
    </Router>
  );
}

export default App;
