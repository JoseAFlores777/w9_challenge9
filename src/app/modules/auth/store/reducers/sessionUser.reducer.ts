
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { sessionUserActions } from '../actions'
import { SessionUser } from '../../../../core/models/sessionUser.model';
import { createReducer } from '@ngrx/store';

export interface SessionUserState extends EntityState<SessionUser> { }

export const adapter = createEntityAdapter<SessionUser>();

export const initialSessionUserState = adapter.getInitialState();

export const sessionUserReducer = createReducer(
    initialSessionUserState,
    
);