import React from 'react';
import "../../assets/css/style.css";


function NavBar() {
    return (
        <section id="homepage">
            <div className="container-fluid navbar">
                <nav>
                    <ul className="navbar nav justify-content-center fixed-top navbar-dark navbar" >
                        <li className="nav-item">
                            <a className="nav-link li-list" href="#homepage">Home
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link li-list" href="#aboutme">
                                About
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link li-list" href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link li-list" href="#contact">
                                Contact
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </section>


    )
}

export default NavBar;