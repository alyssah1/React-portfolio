import { HashRouter as Router} from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Navbar />
        <Home/>
        <About/>





      </Router>
    </div>
  );
}

export default App;
