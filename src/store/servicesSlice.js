import { createSlice } from '@reduxjs/toolkit';

const servicesSlice = createSlice({
    name: 'services',
    initialState: {
        value: null
    },
    reducers: {
        setServices: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setServices: setServicesState } = servicesSlice.actions;
export default servicesSlice.reducer;