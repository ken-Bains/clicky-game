import React from "react";

function CardWrapper(props) {
    return (
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    );
}

export default CardWrapper