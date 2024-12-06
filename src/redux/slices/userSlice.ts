import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface UserState {
    user: null | { id: number; name: string; email: string };
    loading: boolean;
    error: null | string;
}
const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ id: number; name: string; email: string }>) {
            state.user = action.payload;
            state.error = null;
        },
        clearUser(state) {
            state.user = null;
            state.error = null;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
    },
});

export const { setUser, clearUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
