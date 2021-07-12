import {
  Route,
  Switch,
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import HomeInternet from "../HomeInternet";
import HomeInternet5G from "../HomeInternet5G";
import HomeInternet4G from "../HomeInternet4G";
import { StyledNav, NavUnlisted } from "./../../_Style/allStylescomp";

export const RoutingPaths = () => {
  return (
    <Router>
      <StyledNav>
        <NavUnlisted>
          <NavLink to="/" activeClassName="current" exact>
            <li>Home Internet</li>
          </NavLink>
          <NavLink to="/5g-home-internet" activeClassName="current" exact>
            <li>5G HomeInternet</li>
          </NavLink>
          <NavLink to="/4g-home-internet" activeClassName="current" exact>
            <li>4G HomeInternet</li>
          </NavLink>
        </NavUnlisted>
      </StyledNav>
      <Switch>
        <Route exact path="/" component={HomeInternet} />
        <Route exact path="/5g-home-internet" component={HomeInternet5G} />
        <Route exact path="/4g-home-internet" component={HomeInternet4G} />
      </Switch>
    </Router>
  );
};
