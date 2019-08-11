const sql = {
  userByEmailPasswd: `SELECT * FROM jj_users WHERE email = $[email] and password = $[passwd]`,
  userById: `SELECT * FROM jj_users WHERE id = $[id]`
};

export default sql;
