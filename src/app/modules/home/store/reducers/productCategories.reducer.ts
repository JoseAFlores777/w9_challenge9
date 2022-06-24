
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { categoriesActions } from '../actions'
import { SessionUser } from '../../../../core/models/sessionUser.model';
import { createReducer } from '@ngrx/store';
import { Category } from 'src/app/core/models/product.models';
import { Categories } from '../../../../core/models/product.models';

export interface ProductCategoriesState extends EntityState<Categories> { }

export const adapter = createEntityAdapter<Categories>();

export const initialProductCategoriesState = adapter.getInitialState();

export const ProductCategoriesReducer = createReducer(
    initialProductCategoriesState,
    
);