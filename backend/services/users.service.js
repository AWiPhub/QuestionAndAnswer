const mysql = require("mysql2");
const fs = require("fs");

const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "rooted",
  database: "QAAdb",
  password: "1234567890987654321",
});

class UsersService {
  getUsers() {
    return new Promise((res, rej) => {
      pool.query("SELECT * FROM users", function (err, data) {
        return res(data);
      });
    });
  }

  createUser(data) {
    return new Promise((res, rej) => {
      const username = data.username;
      const password = data.password;
      pool.query(
        "INSERT INTO users (username, password) VALUES (?,?)",
        [username, password],
        function (err, data) {
          if (err) return console.log(err);
        }
      );
    });
  }

  updateUser(data) {
    return new Promise((res, rej) => {});
  }

  deleteUser(data) {
    return new Promise((res, rej) => {});
  }
}

module.exports = new UsersService();
