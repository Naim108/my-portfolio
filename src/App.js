import './App.css';
import Contact from './components/Contact/Contact/Contact';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
            </Route>
          <Route path="/home">
            <Home></Home>
            </Route>
          <Route  path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
    </Router>
      
      
    </div>
  );
}

export default App;
