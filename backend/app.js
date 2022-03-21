const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUI = require ("swagger-ui-express");
const swaggerJsDoc = require ("swagger-jsdoc");
const app = express();
//
// var corsOptions = {
//   origin: "http://localhost:8080",
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
//
// };
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
      termsOfService: "http://example.com/terms/",
      contact: {
        name: "API Support",
        url: "http://www.exmaple.com/support",
        email: "support@example.com",
      },
    },

    servers: [
      {
        url: "http://localhost:4001",
        description: "My API Documentation",
      },
    ],
  },
  apis: ["./app/routes/*.js"],
};
const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));



app.use(cors());

// accept request in form or JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./app/models");
db.client.sync();

require("./app/routes/player.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
