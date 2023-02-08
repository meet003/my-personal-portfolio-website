import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { navMenus } from "./config";
import './styles.scss';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }
    return (
        <div>
            <nav className="navBar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">

                        <h3><span>&lt;&#47;M</span>EET&gt;</h3>
                    </Link>
                    <ul className={click ? "navbar__container__menu active" : "navbar__container__menu"}>
                        {navMenus.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link
                                    to={item.to}
                                    className="navbar__container__menu__item__links"
                                >
                                    {item.label}
                                </Link>

                            </li>
                        ))}

                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        {
                            click ? <HiX size={30} /> : <FaBars size={30} />
                        }

                    </div>

                </div>
            </nav>
        </div>
    )
}
export default Navbar;