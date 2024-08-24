import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetCard = ({ uid, name, url }) => {
    const {store, actions} = useContext(Context);

    const handleFavorite = () => {
        store.favorites.includes(name)
            ?
            actions.removeFavorite(name)
            :
            actions.addFavorite(name);
    }

    return (
        <>
            <div className="cardbox" style={{ padding: "20px" }}>
                <div className="card" style={{ width: "20rem" }}>
                    <img src={uid === "1"
                        ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                        :
                        `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`
                    } className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <Link to={`/planets/${uid}`}>
                            <button className="btn btn-primary">
                                Learn more
                            </button>
                        </Link>
                        <button className="btn btn-warning" style={{marginLeft: "130px"}} onClick={handleFavorite} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlanetCard;