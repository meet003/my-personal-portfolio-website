
import React from "react";
import { useState } from "react";
import { ImCog } from "react-icons/im";
import './styles.scss'


const colorArray = [{
    id: 'yellow',
    bgColor: "#ffdd40"
},
{
    id: 'red',
    bgColor: "#E82A2A"
},
{
    id: 'green',
    bgColor: "#6ac045"
},
{
    id: 'blue',
    bgColor: "#5078ff"
},

]

const Theme = () => {

    const [theme, setCurrentTheme] = useState('yellow');
    const [toggle, setToggle] = useState(false);

    const handleToggleTheme = (currentId) => {
        setCurrentTheme(currentId);
        setToggle(false);
    }


    return (
        <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
            <div className="theme-wrapper__toggle-icon">
                <ImCog
                    onClick={() => setToggle(!toggle)}
                    size={40}
                />
            </div>
            <div className="theme-wrapper__menu">
                <h4>Choose Theme</h4>
                <ul>
                    {colorArray.map((item, key) => (
                        <li onClick={() => handleToggleTheme(item.id)} key={key} style={{ background: item.bgColor }} />
                    ))}
                </ul>

            </div>

        </div>
    )
}


export default Theme;