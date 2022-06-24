
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { sessionUserActions } from '../actions'
import { SessionUser } from '../../../../core/models/sessionUser.model';
import { createReducer, on } from '@ngrx/store';
import { signinUser, signinUserError } from '../actions/sessionUser.actions';
import { SignInRequest, SignInResponse } from '../../../../core/models/auth.httpModels';


export interface SessionUserState  { 
    user: SessionUser | null;
    loaded: boolean,
    loading: boolean,
    error  : any
}


export const initialSessionUserState: SessionUserState = {
    user: null,
    loaded : false,
    loading: false,
    error  : null
};

export const sessionUserReducer = createReducer(
    initialSessionUserState,

    on(sessionUserActions.signinUser, (state, { reqBody }) => ({
        ...state,
        loading: true
    })),

    on(sessionUserActions.signinUserSuccess, (state, { resBody }) => ({
        ...state,
        user: resBody.data.user,
        loaded: true,
        loading: false,
        error : null
    })),

    on(signinUserError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),
    on(sessionUserActions.signOutUser, (state) => ({
        ...state,
        user: null,
        loaded: false,
        loading: false,
        error: null
    }))
);


// export const {
//     selectAll
// } = adapter.getSelectors();