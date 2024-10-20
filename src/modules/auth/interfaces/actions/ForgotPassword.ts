export interface IForgotPasswordRequest {
  email: string;
}

export interface IForgotPasswordResponse {
  isOk: boolean;
  message: string;
}
