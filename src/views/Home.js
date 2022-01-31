import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useState } from "react"
import { AiOutlineHeart } from 'react-icons/ai';

const Home = (props) => {
    const { store, actions } = useContext(Context);
    const [active, setActive] = useState(false)
    const { entity } = props;
    
    useEffect(() => {
        actions.obtenerPersonajes();
        actions.obtenerVehiculos();
        actions.obtenerPlanetas();
    }, [])

    console.log(store.personaje)

    return <div>
        <div className="container">
            <h1 className="color">Characters</h1>
            <div className="overflow-auto">
                <div className="row1">
                    {store.personajes?.map(personaje => <div key={personaje.uid} className="col-4">
                        <div className="card d-inline-block m-3" style={{ width: "16rem" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{personaje.name}</h5>
                                <h6> Gender: {personaje.gender}</h6>
                                <h6> Hair Color: {personaje.hair_color}</h6>
                                <h6> Eye Color: {personaje.eye_color}</h6>
                                <Link to={"/details/people/" + personaje.uid} className="btn btn-primary">Learn more!</Link>  {" "}
                                <button className={`btn btn-outline-warning`} onClick={() => actions.favorites(personaje.name)}>
                                    <AiOutlineHeart className={`favorite-icon ${active && 'favorite-active'}`} />
                                </button>
                            </div>

                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        <div className="container">
            <h1 className="color">StarShips</h1>
            <div className="overflow-auto">
                <div className="row1">
                    {store.vehiculos?.map(vehiculo => <div key={vehiculo.uid} className="col-4">
                        <div className="card d-inline-block m-3" style={{ width: "16rem" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{vehiculo.name}</h5>
                                <h6> Starships Class: {vehiculo.starship_class}</h6>
                                <h6>  Model: {vehiculo.model}</h6>
                                <Link to={"/details/starships/" + vehiculo.uid} className="btn btn-primary">Learn more!</Link> {" "}
                                <button className={`btn btn-outline-warning`} onClick={() => actions.favorites(vehiculo.name)}>
                                    <AiOutlineHeart className={`favorite-icon ${active && 'favorite-active'}`} />
                                </button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>

        <div className="container">
            <h1 className="color">Planets</h1>
            <div className="overflow-auto">
                <div className="row1">
                    {store.planetas?.map(planeta => <div key={planeta.uid} className="col-4">
                        <div className="card d-inline-block m-3" style={{ width: "16rem" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{planeta.name}</h5>
                                <h6> Population: {planeta.population}</h6>
                                <h6> Terrain: {planeta.terrain}</h6>
                                <Link to={"/details/planets/" + planeta.uid} className="btn btn-primary">Learn more!</Link> {" "}
                                <button className={`btn btn-outline-warning`} onClick={() => actions.favorites(planeta.name)}>
                                    <AiOutlineHeart className={`favorite-icon ${active && 'favorite-active'}`} />
                                </button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
}

export default Home



//{{BsSuitHeart}}