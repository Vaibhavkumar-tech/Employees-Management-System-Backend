const app = require("./src/app");
const connectionDB = require("./src/db/db");
const cors = require("cors");

app.use(cors());

connectionDB();

if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => {
    console.log("connect to server 3000");
  });
}

module.exports = app;