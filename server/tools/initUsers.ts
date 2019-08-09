import dotenv from "dotenv";
import faker from "faker/locale/ko";
import { Client } from "pg";
import faces from "./faceDataUri";

const initUser = async () => {
  // Faker seed
  dotenv.config();
  faker.seed(20190809);
  const deleteUsersQ = `DELETE FROM public.jj_users`;
  const insertUserQ = `INSERT INTO public.jj_users (email, username, password, height, weight, age, mobile_number, profile_photo, registered_dt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, (select timestamp '2019-01-10 20:00:00' +
  random() * (timestamp '2019-08-20 20:00:00' -
              timestamp '2019-01-10 10:00:00')))`;
  const client = new Client();
  await client.connect();
  await client.query(deleteUsersQ);
  await client.end();

  for (let index = 0; index < faces.length; index++) {
    // Fake users
    const email = faker.internet.email();
    const username = faces[index].name;
    const password = faker.internet.password(4, true, "1234");
    const height = faker.random.number({ min: 150, max: 180, precision: 1 });
    const weight = faker.random.number({ min: 40, max: 80, precision: 1 });
    const age = faker.random.number({ min: 20, max: 30, precision: 1 });
    const mobile_number = faker.phone.phoneNumber("010-####-####");
    const profile_photo = faces[index].face;

    const client = new Client();
    try {
      await client.connect();
      await client.query(insertUserQ, [
        email,
        username,
        password,
        height,
        weight,
        age,
        mobile_number,
        profile_photo
      ]);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      // close the database client
      await client.end();
    }
  }
};

initUser()
  .then(() => {
    console.log("finished");
  })
  .catch(err => {
    console.log("finished with errors", err);
  });
