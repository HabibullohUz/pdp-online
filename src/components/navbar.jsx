const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#6">
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#6">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#5">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#4"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#4">
                    Action
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <button class="btn btn-outline-dark" type="submit">
              <i class="fa-solid fa-cart-shopping"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
