import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/trainerName";
import pokemonName from "./slices/pokemonName";

const store = configureStore({
    reducer: {
        trainerName,
        pokemonName
    }
})

export default store