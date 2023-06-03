export interface ILoginRequestPayload {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  refreshToken: string;
}
