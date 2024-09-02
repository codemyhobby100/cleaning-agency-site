
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
}

const demoSlice = createSlice({
    name: "demo",
    initialState,
    reducers: {
        setDemo: (state, action) => {

 
        }
    },
})
export const { setDemo } = demoSlice.actions;
export default demoSlice.reducer;
