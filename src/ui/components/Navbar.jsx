import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import './Navbar.css';

export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow-sm">
            <div className="container">
                <Link className="navbar-brand" to="heroes">
                    Heroes
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </ul>

                    <div className="navbar-nav ms-auto">
                        <span className="nav-item nav-link text-light">
                            {user?.name}
                        </span>

                        <button
                            className="nav-item nav-link btn btn-outline-light ms-2"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
