import React from "react";
import './styles.scss';

const PageHeaderContent = (props) => {

    const { icon, headerText } = props;

    return (
        <div className="wrapper">
            <h2>{headerText}</h2>
            <span>{icon}</span>
        </div>
    )
}

export default PageHeaderContent;