import { User } from './users';

export interface AuthenticationProfile {
  authenticationId?: any;
  userCode: string;
  emailAddress: string;
  phoneNumber?:string
  accountType:AccountTypes
  password: string;
  activationToken: string;
  tokenExpiry: Date;
  createdDate: Date;
  updatedDate: Date;
  createdBy?: string;
  updatedBy?: string;
}
}

export interface PasswordCreationRequest {
  password: string;
  token: string;
}

export interface LoginRequest {
  emailAddress: string;
  password: string;
}

export enum AccountTypes {
  'ADMINISTRATOR',
  'SUPPORT',
  'REVIEW',
  'CUSTOMER',
  'AGENT',
}

export interface AuthenticationState {
  user?: User;
  loggedIn: boolean;
  token?: string;
}
