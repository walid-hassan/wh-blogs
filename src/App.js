import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from "./Components/Logo";
import Blogposts from './Components/Blogposts'
import DetailPost from "./Components/DetailPost";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <>
      <Router>
      <Logo></Logo>
        <Switch>
          <Route exact path="/">           
            <Blogposts/>
          </Route>
          <Route path="/home">           
            <Blogposts/>
        </Route>
          <Route path="/post/:postId">           
            <DetailPost/>
          </Route> 
          <Route path="*">           
            <ErrorPage/>
          </Route> 
        </Switch>
      </Router>
    </>
);
}


export default App;
