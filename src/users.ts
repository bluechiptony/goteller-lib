import { AccountTypes } from "./authentication";

export interface User {
    userId?:any
    userCode?:string
    firstName:string
    lastName:string
    emailAddress:string
    phoneNumber?:string
    accountType:AccountTypes
    createdDate: Date;
    updatedDate: Date;
    createdBy?: string;
    updatedBy?: string;
  }
}

export interface Customer {}
