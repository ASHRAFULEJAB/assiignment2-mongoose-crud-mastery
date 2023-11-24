// creatring user interface here

import { Model } from "mongoose";

export type TFullname = {
  firstName: string;
  lastName: string;
};

export type TfullAddress = {
  street: string;
  city: string;
  country: string;
};


export type TSingleProduct = {
  productName: string;
  price: string;
  quantity: string;
  
};



export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: TFullname;
  age: number;
  email: string;
  isActive: boolean;
  hobbies: string[];
  address: TfullAddress;
  isDeleted: boolean;
  orders?: TSingleProduct[];
  //
};
//static methods here

export interface UserModel extends Model<TUser> {
  isUserExist(userId: number): Promise<TUser | null>;
}
