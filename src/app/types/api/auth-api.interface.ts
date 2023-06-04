export interface ILoginRequestPayload {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  refreshToken: string;
}

export interface IRegistrationRequestPayload {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface IResetPasswordRequestPayload {
  email: string;
}
