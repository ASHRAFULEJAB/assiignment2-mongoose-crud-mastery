// creatring user interface here

export type Fullname = {
  firstName: string;
  lastName: string;
};

export type fullAddress = {
  street: string;
  city: string;
  country: string;
};

export type User = {
  userId: number;
  username: string;
  password: string;
  fullName: Fullname;
  age: number;
  email: string;
  isActive: "Active" | "Nonactive";
  hobbies: "Gardening" | "Reading" | "Gaming" | "Movies" | "Travelling";
  address: fullAddress;

  //   orders: [
  //     {
  //       productName: string;
  //       price: string;
  //       quantity: string;
  //     }
  //   ];
};
