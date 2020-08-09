"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

const items = require("./data/items.json");
const companies = require("./data/fixedCompanies.json");

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/bacon", (req, res) => res.status(200).json("🥓"))
  .get("/itemsAndCompanies", (req, res) => {
    if (items && companies) {
      let payload = {
        items,
        companies,
      };
      res.status(200).json(payload);
    } else {
      res.status(404).send("Error: could not find the data");
    }
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
