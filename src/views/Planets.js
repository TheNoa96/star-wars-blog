import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const Planets = (id) => {
    const {store, actions} = useContext(Context);
    const params = useParams ();
    useEffect (() => {
        actions.obtenerPlaneta(params.id);
        
    }, []);
    
    console.log(store.planeta)

    return <div><h1>planet {store.planeta.result.properties.name}</h1> </div>
}

export default Planets