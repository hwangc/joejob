export interface User {
  id: number;
  email: string;
  passwd: string;
  name: string;
  age: number;
  height: number;
  weight: number;
}

const fakeUser: User = {
  id: 1,
  email: "joejob@joejob.com",
  passwd: "joejob",
  name: "joe",
  age: 25,
  height: 165,
  weight: 55
};

export default fakeUser;
