import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

export class Navbar extends React.PureComponent {

    render() {
        return (
            <nav>
                <ul className="menu">
                    <li className="navbar-links">
                        <NavLink to="/all-snippets" className="block-link">
                            <span>All Snippets</span>
                        </NavLink>
                        <NavLink to="/own-snippets" className="block-link">
                            <span>Own Snippets</span>
                        </NavLink>
                        <NavLink to="/create-snippet" className="block-link">
                            <span>Create Snippet</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}