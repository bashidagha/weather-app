import { configureStore } from "@reduxjs/toolkit";
import citySlice from "./city-slice";

const store = configureStore({
    reducer: {city: citySlice.reducer}
})

export default store