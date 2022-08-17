const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#2">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#1">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#3">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#4">Enterprise</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#5">Support</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#6">Pricing</a>
                        </li>

                     </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-primary" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>

        </nav>
    )


}

export default Navbar
