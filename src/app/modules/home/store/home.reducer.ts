import * as reducers from './reducers';
import * as mainState from '../../../store/app.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState extends mainState.AppState { 
    productCategories: reducers.ProductCategoriesState;
}

export const HomeReducer: ActionReducerMap<AppState> = {
    productCategories: reducers.ProductCategoriesReducer
}