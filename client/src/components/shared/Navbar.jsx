import { Link } from "react-router-dom";
import { Cart2 } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <Link className="nav-link fw-bold" to="/">
            Online Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mx-3" to="/admin">
                  Admin
                </Link>
              </li>
            </ul>
            <span className="navbar-item mx-3"></span>
            <span className="navbar-item mx-2">
              <Link className="nav-link " to="/cart">
                <div className="d-flex align-items-center">
                  <div className="d-flex">
                    <div className="d-none d-lg-block position-relative mx-3">
                      <Cart2
                        className="d-sm-none d-lg-block"
                        color="black"
                        size={24}
                      />
                      <span className="d-none d-lg-block position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </span>
            <span className="navbar-item mx-1">
              <Link className="nav-link" to="/orders">
                Orders
              </Link>
            </span>
            <span className="navbar-item mx-4">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;