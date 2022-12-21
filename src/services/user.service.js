require("module-alias/register");
const pool = require("@configs/database");

const registerService = async (data) => {
  const db = pool.promise();

  const result = await db.query(
    `INSERT INTO user (name, age, email, password) VALUES ('${data.name}', ${data.age}, '${data.email}', '${data.password}')`
  );

  return result;
};

module.exports = { registerService };
