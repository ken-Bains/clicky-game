import React from "react";

function Navbar(props) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-light bg-light">
                <h4>Clicky Game!</h4>
                <h4>{props.answerText}</h4>
                <h4>Score: {props.score} | Top Score {props.topScore}</h4>
            </nav>
        </div>
    );
};

export default Navbar