const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
console.log(process.env.DB_HOST);

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true }).catch(err => {
  console.log("Connection to database error\n" + err);
});

mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log("now listening for requests on port 5000");
});
