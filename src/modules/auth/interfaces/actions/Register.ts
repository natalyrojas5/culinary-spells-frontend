export interface IRegisterRequest {
  email: string;
  password: string;
  name: string;
  lastname?: string;
  gender: number;
  idCountry: number;
}

export interface IRegisterResponse {
  isOk: boolean;
  message: string;
}
