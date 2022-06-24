import { createAction, props } from '@ngrx/store';


export const loadSessionUser = createAction(
    '[Usuario] Load SessionUser',
    props<{ id: string }>()
);

export const loadSessionUserSuccess = createAction(
    '[Usuario] Load SessionUser Success',
    props<{ sessionUser: any }>()
);

export const loadSessionUserError = createAction(
    '[SessionUser] Load SessionUser Error',
    props<{ payload: any }>()
);

