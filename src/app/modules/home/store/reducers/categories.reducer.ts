
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { categoriesActions } from '../actions'
import { SessionUser } from '../../../../core/models/sessionUser.model';
import { createReducer } from '@ngrx/store';
import { Category } from 'src/app/core/models/product.models';

export interface CategoriesState extends EntityState<Category> { }

export const adapter = createEntityAdapter<Category>();

export const initialCategoryState = adapter.getInitialState();

export const categoryReducer = createReducer(
    initialCategoryState,
    
);