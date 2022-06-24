import * as reducers from './reducers';
import * as mainState from '../../../store/app.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState extends mainState.AppState { 
    sessionUser: reducers.SessionUserState;
}

export const authReducer: ActionReducerMap<AppState> = {
    sessionUser: reducers.sessionUserReducer
}


