import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import List from './pages/List';
import Contact from './pages/Contact';
import Userauth from './pages/Userauth';
import Loginpage from './pages/Loginpage';
import Profile from './pages/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { registerAuthStateChangeHandler, getUserProfileById } from './logic/user';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserProfile } from './redux/actions/userActions';
import getUserLocation from './logic/geolocationUser';


function App() {
  const dispatch = useDispatch();
  const[location,setLocation]=useState([])

  useEffect(() => {
    registerAuthStateChangeHandler(async (user) => {
    if(user){
      const useProfile = await getUserProfileById(user.uid)
      dispatch(setUserProfile(useProfile));
      getUserLocation(setLocation)
      /// dispatch 
    } else{
      dispatch(setUserProfile(null));
    }

    })
  },[])

  console.log(location)
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
          <Route path="/userauth" exact>
              <Userauth />
          </Route>
          <Route path="/login" exact>
              <Loginpage />
          </Route>
          <Route path="/user" exact>
              <Profile />
          </Route>
          
        </Switch>  
      </Router>
    </div>


  );
}

export default App;
