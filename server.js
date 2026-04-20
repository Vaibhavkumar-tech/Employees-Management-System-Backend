const app = require("./src/app");
const connectionDB = require("./src/db/db");

connectionDB();

module.exports = app;

if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => {
    console.log("Server running on 3000");
  });
}