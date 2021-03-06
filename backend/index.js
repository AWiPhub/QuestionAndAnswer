const express = require("express");
const routes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

const host = "localhost";
const port = 7000;
app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
);

app.use("/api", routes);

// получение списка пользователей
// app.get("/", function (req, res) {
//   pool.query("SELECT * FROM users", function (err, data) {
//     res.send(data);
//   });
// });

// // возвращаем форму для добавления данных
// app.get("/create", function (req, res) {});
// // получаем отправленные данные и добавляем их в БД
// app.post("/create", urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400);
//   const name = req.body.name;
//   const age = req.body.age;
//   pool.query(
//     "INSERT INTO users (name, age) VALUES (?,?)",
//     [name, age],
//     function (err, data) {
//       if (err) return console.log(err);
//       res.redirect("/");
//     }
//   );
// });

// // получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
// app.get("/edit/:id", function (req, res) {
//   const id = req.params.id;
//   pool.query("SELECT * FROM users WHERE id=?", [id], function (err, data) {});
// });
// // получаем отредактированные данные и отправляем их в БД
// app.post("/edit", urlencodedParser, function (req, res) {
//   if (!req.body) return res.sendStatus(400);
//   const name = req.body.name;
//   const age = req.body.age;
//   const id = req.body.id;

//   pool.query(
//     "UPDATE users SET name=?, age=? WHERE id=?",
//     [name, age, id],
//     function (err, data) {
//       if (err) return console.log(err);
//       res.redirect("/");
//     }
//   );
// });

// // получаем id удаляемого пользователя и удаляем его из бд
// app.post("/delete/:id", function (req, res) {
//   const id = req.params.id;
//   pool.query("DELETE FROM users WHERE id=?", [id], function (err, data) {
//     if (err) return console.log(err);
//     res.redirect("/");
//   });
// })
