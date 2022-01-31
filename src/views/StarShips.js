import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const StarShips = () => {
    const {store, actions} = useContext(Context);
    const params = useParams ();
    useEffect (() => {
        actions.obtenerVehiculo(params.id);
    }, []);
    
    console.log(store.vehiculo);

    return <div>
        <h1>StarShips {store.vehiculo.result.properties.name}</h1>
        </div>
}

export default StarShips