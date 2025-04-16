export interface Hair {
  color: string;
  type: string;
}

export interface Address {
  postalCode: string;
}

export interface User {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female';
  age: number;
  hair: Hair;
  address: Address;
  company: {
    department: string;
  };
}
// types ที่ต้องการใน expected output ของโจทย์