import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { getUserParams } from '../../helpers/user-helper';
import Can from '../Can/Can';

export class Navbar extends React.PureComponent {

    render() {
        return (
            <nav>
                <ul className="menu">
                    <Can
                        role={getUserParams()}
                        perform="snippets:create"
                        yes={() => (
                            <li className="navbar-links">
                                <NavLink to={`/all-snippets?${getUserParams()}`} className="block-link">
                                    <span>All Snippets</span>
                                </NavLink>
                                <NavLink to={`/own-snippets?${getUserParams()}`} className="block-link">
                                    <span>Own Snippets</span>
                                </NavLink>
                                <NavLink to={`/create-snippet?${getUserParams()}`} className="block-link">
                                    <span>Create Snippet</span>
                                </NavLink>
                                <NavLink to={'/'} className="block-link">
                                    <span>Choose User</span>
                                </NavLink>
                            </li>
                        )}
                        no={() => (
                            <li className="navbar-links">
                                <NavLink to={'/'} className="block-link">
                                    <span>Choose User</span>
                                </NavLink>
                            </li>
                        )}
                    />
                </ul>
            </nav>
        );
    }
}