import { createAppSlice } from "../createAppSlice"
import { apiFetchCategories } from "../../config/api"
import { ICategories } from "../../config/data.type"

export interface CategoriesState {
    data: ICategories[],
    status: "idle" | "loading" | "failed"
}

const initialState: CategoriesState = {
    data: [],
    status: "idle",
}

// If you are not using async thunks you can use the standalone `createSlice`.
export const categoriesSlice = createAppSlice({
    name: "categories",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: create => ({
        // The function below is called a thunk and allows us to perform async logic. It
        // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
        // will call the thunk with the `dispatch` function as the first argument. Async
        // code can then be executed and other actions can be dispatched. Thunks are
        // typically used to make async requests.
        fetchCategoriesAsync: create.asyncThunk(
            async () => {
                const response = await apiFetchCategories()
                // The value we return becomes the `fulfilled` action payload
                return response
            },
            {
                pending: state => {
                    state.status = "loading"
                },
                fulfilled: (state, action) => {
                    if (action.payload && action.payload.data) {
                        state.status = "idle"
                        //@ts-ignore
                        state.data = action.payload.data;
                    }
                },
                rejected: state => {
                    state.status = "failed"
                },
            },
        ),
    }),
    // You can define your selectors here. These selectors receive the slice
    // state as their first argument.
    selectors: {
        selectData: categories => categories.data,
        selectStatus: categories => categories.status,
    },
})

// Action creators are generated for each case reducer function.
export const { fetchCategoriesAsync } =
    categoriesSlice.actions

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectData, selectStatus } = categoriesSlice.selectors

