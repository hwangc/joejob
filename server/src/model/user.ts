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

  public async getByEmailPasswd(email: string, passwd: string) {
    return await this.db.one(sql.userByEmailPasswd, { email, passwd });
  }
  public async getById(id: any) {
    return await this.db.one(sql.userById, { id });
  }
}

const user = new User(database);

export default user;
