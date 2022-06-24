import { SessionUser } from "./sessionUser.model";

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  data: {
    token: string;
    user: SessionUser;
  }
}


