import { Link } from "react-router-dom";




const Header = () => {
    return (
        <header>
            <div id="container d-flex justify-content-center ">
                <div className="row logoheader ">
                    <div className="col-4 mx-auto text-center">
                        <img className="img-fluid" src="./assets/img/logo.png" alt="logo" width="150" height="150" />
                    </div>
                </div>
            </div>
            <div>
                <ul className="nav  nav-pills nav-justified">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link " aria-current="page">ACCUEIL</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">À PROPOS </a>
                    </li>
                    <li className="nav-item">
                        <Link to={'/rooms'} className="nav-link " aria-current="page">LES CHAMBRES & LA CHURRASQUEIRA </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/reservations'} className="nav-link " aria-current="page">RÉSERVATIONS </Link>

                    </li>
                    <li className="nav-item">
                        <a className="nav-link ">CONTACTS</a>
                    </li>
                </ul>
            </div>
        </header>

    )
}

export default Header;  