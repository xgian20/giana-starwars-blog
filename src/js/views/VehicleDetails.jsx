import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehicleDetails = () => {
	const { store, actions } = useContext(Context);

	const { id } = useParams();

	useEffect(() => {
		actions.getVehicleDetails(id);
	}, [id]);

	const isLoading = !store.vehicleDetails && !store.vehicleDetailsError;

	return (
		<div className="container my-5">
			{isLoading ? (
				<div className="d-flex justify-content-center">
					<img src="https://media1.tenor.com/m/fc47Cmt6yn4AAAAC/star-wars-disney.gif" alt="Loading..." />
				</div>
			) : store.vehicleDetails ? (
				<div className="card bg-dark text-light p-4" style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
					<div className="row">
						<div className="col-md-4">
							<img
								src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
								className="img-fluid rounded"
								alt={store.vehicleDetails.properties.name}
							/>
						</div>
						<div className="col-md-8">
							<h1 className="text-primary">{store.vehicleDetails.properties.name}</h1>
							<p className="card-text text-primary fs-5">Manufacturer: {store.vehicleDetails.properties.manufacturer}</p>
							<p className="card-text text-primary fs-5">Vehicle Class: {store.vehicleDetails.properties.vehicle_class}</p>
							<p className="card-text text-primary fs-5">Cost in Credits: {store.vehicleDetails.properties.cost_in_credits}</p>
							<p className="card-text text-primary fs-5">Vehicle Model: {store.vehicleDetails.properties.model}</p>
							<p className="card-text text-primary fs-5">Max Speed: {store.vehicleDetails.properties.max_atmosphering_speed}</p>
							<p className="card-text text-primary fs-5">Passengers: {store.vehicleDetails.properties.passengers}</p>
							<p className="card-text text-primary fs-5">Cargo Capacity: {store.vehicleDetails.properties.cargo_capacity}</p>
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

export default VehicleDetails;