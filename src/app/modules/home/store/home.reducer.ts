import * as reducers from './reducers';
import * as mainState from '../../../store/app.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState extends mainState.AppState { 
    categories: reducers.CategoriesState;
}

export const HomeReducer: ActionReducerMap<AppState> = {
    categories: reducers.categoryReducer
}