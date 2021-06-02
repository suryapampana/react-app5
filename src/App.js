import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route path="/about-us">
          <AboutUs />
        </Route>

        <Route path="/project">
          <Project />
        </Route>

        <Route path="/contact-us">
          <ContactUs />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
