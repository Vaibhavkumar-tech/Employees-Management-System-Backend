const app = require("./src/app");
const connectionDB = require("./src/db/db");

connectionDB()
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB Error:", err);
  });

if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => {
    console.log("Server running on 3000");
  });
}

module.exports = app;