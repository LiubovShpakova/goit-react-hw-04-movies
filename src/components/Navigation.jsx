import { NavLink } from "react-router-dom";
import routes from "../routes";

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        exact
        to={routes.home}
        className="nav__link"
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.moviesPage}
        className="nav__link"
        activeClassName="active"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
