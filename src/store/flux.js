const getState = ({ setStore, getStore, getActions }) => {
   

   return {
      store: {
         personaje: {},
         personajes: [],
         vehiculo: {},
         vehiculos: [],
         planeta: {},
         planetas: [],
         details: [],
         favorites: []
      },
      actions: {
         obtenerPersonaje: (id) => {
            fetch("https://www.swapi.tech/api/people/" + id)
               .then(res => res.json())
               .then(data => setStore({ personaje: data }));
         },
         obtenerPersonajes: () => {
            fetch("https://www.swapi.tech/api/people")
               .then(res => res.json())
               .then(data => setStore({ personajes: data.results }));
         },
         obtenerVehiculo: (id) => {
            fetch("https://www.swapi.tech/api/starships/" + id)
               .then(res => res.json())
               .then(data => setStore({ vehiculo: data }));
         },
         obtenerVehiculos: () => {
            fetch("https://www.swapi.tech/api/starships")
               .then(res => res.json())
               .then(data => setStore({ vehiculos: data.results }));
         },
         obtenerPlaneta: (id) => {
            fetch("https://www.swapi.tech/api/planets/" + id)
               .then(res => res.json())
               .then(data => setStore({ planeta: data }));
         },
         obtenerPlanetas: () => {
            fetch("https://www.swapi.tech/api/planets")
               .then(res => res.json())
               .then(data => setStore({ planetas: data.results }));
         },
         favorites: name => {
				if(!getStore().favorites.includes(name)){
					setStore({ favorites: [...getStore().favorites, name]});
				}
			},
		
			deleteFavorite: index => {
				const store = getStore();
				store.favorites(index, 1);
				setStore({ favorites: store.favorites });
			}
      }
   };
};

export default getState;



// addFavorites: (entity) => {
//    const store = getStore();
//    const newFavorite = [...store.favorites, entity];
//    setStore({ favorites: newFavorite });
//  },
//  deleteFavorite: (favorite) => {
//    const store = getStore();
//    console.log("this is what I pretend to delete", favorite);
//    setStore({
//     favorites: store.favorites.filter(
//       (item) => favorite.name !== item.name
//     ),
//    });
//    console.log("finish deleting the favorite");
//  },
//<div>{store.personaje.result.properties.name}</div>
//</div>{store.personaje[params.id].name}</div>

