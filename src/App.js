import { Route, Switch } from "react-router-dom";
import NavBar from "./components/core/navbar";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Resources from "./pages/resources";
import Tools from "./pages/tools";
import "./styles.css"

function App() {
  return (
      <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/tools" component={Tools} />
      </Switch>
      </div>
  );
}

export default App;
