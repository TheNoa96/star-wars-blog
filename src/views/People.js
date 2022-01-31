import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const People = (id) => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.obtenerPersonaje(params.id);

    }, []);

    console.log(store.personaje)

    return  <div><h1>Character {store.personaje.result.properties.name}</h1> </div>

    // return <div key={id}>
    //     {store.personajes.map((personaje, id ) => {
    //         if (id == parseInt(params)) {
    //             return (
    //                 <div className="container">
    //                     <div className="row my-5">
    //                         <div className="col-12 col-sm-6">
    //                             <img className="img-detail" src="https://via.placeholder.com/500x300" />
    //                         </div>
    //                         <div className="col-12 col-sm-6">
    //                             <h1>{personaje.name}</h1>
    //                             <p>
    //                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus, mauris nec malesuada
    //                                 commodo, erat ligula blandit sem, ac sagittis metus dolor vel leo. Maecenas mattis nibh vel
    //                                 tempor ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse
    //                                 potenti. Aliquam eget libero porttitor metus commodo ullamcorper id sit amet libero. Aliquam
    //                                 mollis, ligula id interdum lacinia, nulla orci consectetur quam, eget porttitor neque nisi et
    //                                 magna. Etiam sed suscipit urna, id viverra risus. Sed blandit id magna dignissim bibendum.
    //                                 Praesent sit amet ultricies neque, sed commodo lorem.
    //                             </p>
    //                         </div>
    //                     </div>
    //                     <div className="row text-center border-top border-danger pt-3">
    //                         <div className="col-2 text-danger">
    //                             <p classNmae="mb-2 font-weight-bold">Name:</p>
    //                             <span>{personaje.name}</span>
    //                         </div>
    //                         <div className="col-2 text-danger">
    //                             <p classNmae="mb-2 font-weight-bold">Birth Year: </p>
    //                             <span>{personaje.birth_year}</span>
    //                         </div>
    //                         <div className="col-2 text-danger">
    //                             <p classNmae="mb-2 font-weight-bold">Gender: </p>
    //                             <span>{personaje.gender}</span>
    //                         </div>
    //                         <div className="col-2 text-danger">
    //                             <p classNmae="mb-2 font-weight-bold">Height: </p>
    //                             <span>{personaje.height}</span>
    //                         </div>
    //                         <div className="col-2 text-danger">
    //                             <p classNmae="mb-2 font-weight-bold">Skin Color: </p>
    //                             <span>{personaje.skin_color}</span>
    //                         </div>
    //                         <div className="col-2 text-danger">
    //                             <p classNmae="mb-2 font-weight-bold">Eye Color: </p>
    //                             <span>{personaje.eye_color}</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             );
    //         }
    //     })}
    // </div>
}


export default People


//