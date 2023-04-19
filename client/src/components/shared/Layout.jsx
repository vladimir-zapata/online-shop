import { Link } from "react-router-dom";
import { Cart2 } from "react-bootstrap-icons";

const Layout = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div class="container-fluid">
          <Link class="nav-link fw-bold" to="/">
            Online Store
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link ml-1" to="/products">
                  Products
                </Link>
              </li>
            </ul>
            <span class="navbar-item mx-2">
              <Link class="nav-link" to="/orders">
                Admin
              </Link>
            </span>
            <span class="navbar-item mx-2">
              <Link class="nav-link " to="/cart">
                <div className="d-flex align-items-center">
                  <div className="d-flex">
                    <div className="d-none d-lg-block position-relative mx-2">
                      <Cart2
                        className="d-sm-none d-lg-block"
                        color="black"
                        size={24}
                      />
                      <span class="d-none d-lg-block position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        1
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </span>
            <span class="navbar-item mx-1">
              <Link class="nav-link" to="/orders">
                Orders
              </Link>
            </span>
            <span class="navbar-item mx-4">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Layout;
