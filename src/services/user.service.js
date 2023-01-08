require("module-alias/register");
const pool = require("@configs/database");

const loginService = async (data) => {
  const db = pool.promise();
  try {
    const result = await db.query(
      `SELECT * FROM admin WHERE username='${data.username}' AND password='${data.password}'`
    );

    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
};

module.exports = { loginService };
