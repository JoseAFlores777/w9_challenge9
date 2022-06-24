import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SessionUserState } from "../reducers";
// import * as fromSessionUserReducer from "../reducers";
import * as fromSessionUserReducer from "../auth.reducer";
// import { AppState } from 'src/app/store/app.reducer';



export const selectSessionUserState = createFeatureSelector<fromSessionUserReducer.AppState>('sessionUser');




export const selectSessionUser = createSelector(
    selectSessionUserState,
    (state: fromSessionUserReducer.AppState) => {
        return state.sessionUser
    }
)

export const isAuthenticated = createSelector(
    selectSessionUserState,
    (state: fromSessionUserReducer.AppState) => {
        return state.sessionUser.loaded
    }
)


