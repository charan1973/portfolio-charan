import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="container">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark">
          <span class="navbar-brand" href="#">
            Charan
          </span>
          <div>
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/tools">
                  Tools
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/resources">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;