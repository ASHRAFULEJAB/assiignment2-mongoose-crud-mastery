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

  //   orders: [
  //     {
  //       productName: string;
  //       price: string;
  //       quantity: string;
  //     }
  //   ];
};
//static methods here

export interface UserModel extends Model<TUser> {
  isUserExist(userId: string): Promise<TUser | null>;
}
