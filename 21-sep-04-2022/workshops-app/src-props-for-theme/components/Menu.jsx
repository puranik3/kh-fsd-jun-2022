import { Link, NavLink } from 'react-router-dom';

const Menu = ( { theme, toggleTheme } ) => {
    const navClass = ( theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light' );

    return (
        <nav className={"navbar navbar-expand-lg " + navClass}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Workshops App
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/"
                                activeClassName="active"
                                exact
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/workshops">
                                List of workshops
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/workshops/add">
                                Add a workshops
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-primary btn-sm" onClick={toggleTheme}>Toggle theme</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Menu;