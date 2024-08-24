import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PersonDetails = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const { id } = useParams();

	useEffect(() => {
		actions.getPersonDetails(params.id);
	}, []);

	return (
		<div className="container my-5">
			{store.personDetails ? (
				<div className="card bg-dark text-light p-4" style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
					<div className="row">
						<div className="col-md-4">
							<img
								src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
								className="img-fluid rounded"
								alt={store.personDetails.properties.name}
							/>
						</div>
						<div className="col-md-8">
							<h1 className="text-primary">{store.personDetails.properties.name}</h1>
							<p className="card-text text-primary fs-5">Birth Year: {store.personDetails.properties.birth_year}</p>
							<p className="card-text text-primary fs-5">Gender: {store.personDetails.properties.gender}</p>
							<p className="card-text text-primary fs-5">Height: {store.personDetails.properties.height}</p>
							<p className="card-text text-primary fs-5">Skin Color: {store.personDetails.properties.skin_color}</p>
							<p className="card-text text-primary fs-5">Hair Color: {store.personDetails.properties.hair_color}</p>
							<p className="card-text text-primary fs-5">Mass: {store.personDetails.properties.mass}</p>
							<p className="card-text text-primary fs-5">Eye Color: {store.personDetails.properties.eye_color}</p>

							<Link to="/">
								<button className="btn btn-primary btn-lg mt-3">Back home</button>
							</Link>
						</div>
					</div>
				</div>
			) : (
				<img src="https://media1.tenor.com/m/fc47Cmt6yn4AAAAC/star-wars-disney.gif" alt="Loading..." />
			)}
		</div>
	);
};

export default PersonDetails;

PersonDetails.propTypes = {
	match: PropTypes.object
};
