import { HashRouter as Router, Link, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./assets/css/style.css"



function App() {
  return (
      <Router basename="/">
      <section id="homepage">
            <div className="container-fluid navbar">
                <nav>
                    <ul className="navbar nav justify-content-center fixed-top navbar-dark navbar" >
                        <li className="nav-item">
                            <Link className="nav-link li-list" to="./index">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link li-list" to="./about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link li-list" to="./portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link li-list" to="./contact">Contact</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </section>

      <Switch>
        <Route exact path={["*/index", "/"]}>
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
      </Switch>
      <footer className="footer">
        Copyright <i className="far fa-copyright"></i> Alyssa Hollowell 2021
      </footer>
  </Router>
  );
}

export default App;
