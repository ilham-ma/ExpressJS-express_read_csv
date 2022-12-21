require("module-alias/register");
const pool = require("@configs/database");

pool.getConnection((error, con) => {
  if (error !== null) {
    con.query(
      `CREATE TABLE user (
         id INT AUTO_INCREMENT PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         age INT NOT NULL,
         email VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL
         )`
    );

    con.release();
  }
});
