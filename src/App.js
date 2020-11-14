import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import List from './pages/List';
import Contact from './pages/Contact';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/about" exact>
              <About />
          </Route>
          <Route path="/list" exact>
              <List />
          </Route>
          <Route path="/contact" exact>
              <Contact />
          </Route>
          <Route path="/login" exact>
              <Login />
          </Route>
          
        </Switch>  
      </Router>
    </div>


  );
}

export default App;
