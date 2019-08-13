const sql = {
  userByEmailPasswd: `SELECT * FROM jj_users WHERE email = $[email] and password = $[password]`,
  userById: `SELECT * FROM jj_users WHERE id = $[id]`,
  addUser: `INSERT INTO jj_users (email, password, username, age, height, weight, mobile_number, registered_dt) VALUES ($[email], $[password], $[username], $[age], $[height], $[weight], $[mobile_number], now()) RETURNING email`
};

export default sql;
