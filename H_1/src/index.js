
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const http = require("http");

app.use("/v1",routes);

app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

connectDB()
const server = http.createServer(app)

server.listen(config.port, () => {
     console.log("server listning port number 4545!");
   });
