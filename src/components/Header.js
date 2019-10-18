import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subTitle && <h3 className="header__subTitle">{props.subTitle}</h3>}
        </div>
    </div>
);
// settinng Default prop value of title
Header.defaultProps = {
    title: "Indecision APP"
}

export default Header;