import { apiProfile } from "@/config/api";
import { createAppSlice } from "../createAppSlice"

export interface ProfileState {
    isAuthenticated: boolean;
    user: {
        "_id": string,
        "firstName": string,
        "lastName": string,
        "email": string,
        "mobile": string,
        "wishlist": Array<string>,
        "isBlocked": boolean,
        "cart": Array<string>,
        "__v": number,
        "createdAt": string,
        "updatedAt": string
    }
}

const initialState: ProfileState = {
    isAuthenticated: false,
    user: {
        "_id": "",
        "firstName": "",
        "lastName": "",
        "email": "",
        "mobile": "",
        "wishlist": [],
        "isBlocked": false,
        "cart": [],
        "__v": 0,
        "createdAt": "",
        "updatedAt": ""
    }
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const profileSlice = createAppSlice({
    name: "profile",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: create => ({
        fetchProfileAsync: create.asyncThunk(
            async () => {
                const response = await apiProfile()
                // The value we return becomes the `fulfilled` action payload
                return response.data
            },
            {
                pending: state => {
                    state.isAuthenticated = false
                },
                fulfilled: (state, action) => {
                    if (action.payload && action.payload) {
                        state.isAuthenticated = true;
                        state.user._id = action.payload?._id;
                        state.user.firstName = action?.payload?.firstName;
                        state.user.lastName = action?.payload?.lastName;
                        state.user.email = action?.payload?.email;
                        state.user.mobile = action?.payload?.mobile;
                        state.user.wishlist = action?.payload?.wishlist;
                        state.user.isBlocked = action?.payload?.isBlocked;
                        state.user.cart = action?.payload?.cart;
                        state.user.__v = action?.payload?.__v;
                        state.user.createdAt = action?.payload?.createdAt;
                        state.user.createdAt = action?.payload?.createdAt
                    }
                },
                rejected: state => {
                    state.isAuthenticated = false
                },
            },
        ),
        logoutAction: create.reducer(
            (state, action) => {
                localStorage.removeItem('access_token');
                state.isAuthenticated = false;
                state.user._id = "";
                state.user.firstName = "";
                state.user.lastName = "";
                state.user.email = "";
                state.user.mobile = "";
                state.user.wishlist = [];
                state.user.isBlocked = false;
                state.user.cart = [];
                state.user.__v = 0;
                state.user.createdAt = "";
                state.user.createdAt = ""
            }
        ),
    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectIsAuthenticated: profile => profile.isAuthenticated,
        selectUser: profile => profile.user,
    },
})

// Action creators are generated for each case reducer function.
export const { fetchProfileAsync, logoutAction } =
    profileSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectIsAuthenticated, selectUser } = profileSlice.selectors

