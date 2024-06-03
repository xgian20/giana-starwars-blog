import React from "react";

const PlanetCard = ({ uid, name, url }) => {
    return (
        <>
            <div className="cardbox" style={{ padding: "20px" }}>
                <div className="card" style={{ width: "20rem"}}>
                    <img src={ uid === "1"
                               ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                               :
                                 `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
                    } className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlanetCard;