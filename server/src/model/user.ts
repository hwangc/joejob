import database from "../db";
import sql from "../db/sql";

interface UserType {
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

const fakeUser: UserType = {
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

class User {
  private db: any;
  constructor(db: any) {
    this.db = db;
  }

  public async getByEmailPasswd(email: string, password: string) {
    return await this.db.one(sql.userByEmailPasswd, { email, password });
  }
  public async getById(id: any) {
    return await this.db.one(sql.userById, { id });
  }
  public async addUser(email: string, password: string, username: string, age?: number, height?: number, weight?: number, mobile_number?: number) {
    return await this.db.one(sql.addUser, {email, password, username, age, height, weight, mobile_number})
  }
}

const user = new User(database);

export default user;
