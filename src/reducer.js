import {
  setPersistentFaves,
  setPersistentFavesId,
} from "./helpers/persistentData";

const reducer = (state, action) => {
  if (action.type === "SET_FAV") {
    let faves = [];
    if (state.faves) {
      faves = [...state.faves];
    }
    faves.push(action.payload);
    console.log(faves);
    setPersistentFaves(faves);
    return { ...state, faves };
  }

  if (action.type === "DELETE_FAV") {
    const faves = [...state.faves];
    console.log(faves);
    const newFaves = faves.filter((fav) => fav.id !== action.payload);
    console.log(newFaves);
    setPersistentFaves(newFaves);
    return { ...state, faves: newFaves };
  }

  /* if (action.type === "setActiveTab") {
    return { ...state, activeTab: action.payload };
  }
  if (action.type === "setAccion") {
    return { ...state, accion: action.payload };
  }
  if (action.type === "CLICKS") {
    console.log("Funciona el reducer");
    return { ...state };
  } */
  throw new Error("Not found any action.type");
};

export default reducer;
