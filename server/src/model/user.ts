import dotenv from "dotenv";
import pgPromise from "pg-promise";

dotenv.config();
export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  height: number;
  weight: number;
  age: number;
  mobile_number: string;
  profile_photo: string;
  registered_dt: string;
  modified_dt: string;
}

const fakeUser: User = {
  id: 1,
  email: "joejob@joejob.com",
  password: "joejob",
  username: "joe",
  age: 25,
  height: 165,
  weight: 55,
  mobile_number: "",
  profile_photo: "",
  registered_dt: "",
  modified_dt: ""
};

export default fakeUser;
