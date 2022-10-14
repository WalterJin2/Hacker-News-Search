import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    status: "addNew",
    id: 0
}
const postsSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        setStatus(state, action) {
            state.status = action.payload
        },
        setId(state, action) {
            state.id = action.payload
        },
    },

})


export const { setStatus,setId } = postsSlice.actions

export default postsSlice.reducer