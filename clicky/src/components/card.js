import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col m-1">
                    <div className="card">
                        <img src={props.img} className="card-img-top picHover" alt={props.id} style={{height:170, width: 170}} onClick={()=> props.getClicked(props.id)}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card