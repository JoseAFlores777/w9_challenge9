import { createAction, props } from '@ngrx/store';
import { SignInRequest, SignInResponse } from '../../../../core/models/auth.httpModels';


export const signinUser = createAction(
    '[Usuario] Load SessionUser',
    props<{ reqBody: SignInRequest }>()
);

export const signinUserSuccess = createAction(
    '[Usuario] Load SessionUser Success',
    props<{ resBody: SignInResponse }>()
);

export const signinUserError = createAction(
    '[SessionUser] Load SessionUser Error',
    props<{ payload: any }>()
);

