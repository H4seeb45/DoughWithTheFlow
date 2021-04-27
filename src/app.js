import React from "react";
import SignIn from "./components/Signin";
import Features from "./components/Features";
import About from "./components/About";
import ToDo from "./components/todolist";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";
import {
  BrowserRouter,
  Route,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";
import NavBar from "./components/Navbar";
const Main = withRouter((props) => {
  return (
    <div>
      {props.location.pathname !== "/SignIn" && (
        <Route path="/" render={(props) => <NavBar {...props} />} />
      )}
      <Switch>
        <Route path="/SignIn" render={(props) => <SignIn {...props} />} />
        <Route path="/Blog">
          <Blog />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/ToDo">
          <ToDo />
        </Route>

        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route path="/Features">
          <Features />
        </Route>
        <Redirect to="/Features" />
      </Switch>
    </div>
  );
});
function App() {
  return (
    <div>
      <BrowserRouter>
        <Main></Main>
      </BrowserRouter>
    </div>
  );
}
export default App;
