require("module-alias/register");
const pool = require("@configs/database");

pool.getConnection((error, con) => {
  if (error !== null) {
    con.query(
      `CREATE TABLE admin (
         id INT AUTO_INCREMENT PRIMARY KEY,
         username VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL,
         )`
    );

    con.release();
  }
});
