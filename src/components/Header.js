import React from 'react';

const Header = (props) => (
    <div>
        <h1>{props.title}</h1>
        {props.subTitle && <h3>{props.subTitle}</h3>}
    </div>
);
// settinng Default prop value of title
Header.defaultProps = {
    title: "Indecision APP"
}

export default Header;