import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = ({ name, uid, url }) => {

    return (
        <>
            <div className="cardbox" style={{padding: "20px"}}>
                <div className="card" style={{ width: "20rem"}}>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <Link to={`/people/${uid}`}>
                            <button className="btn btn-primary">
                                Learn more
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PeopleCard;