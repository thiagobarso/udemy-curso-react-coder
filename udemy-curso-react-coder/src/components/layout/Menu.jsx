import './Menu.css';
import React from "react";
import { Link } from 'react-router-dom';

const Menu = props => {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Ínicio</Link>
                    </li>
                    <li>
                        <Link to="/param/123">Param #01</Link>
                    </li>
                    <li>
                        <Link to="/param/legal">Param #02</Link>
                    </li>
                    <li>
                        <Link to="/about">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/about2">Não Existe</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Menu;