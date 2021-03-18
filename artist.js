var express = require("express");
var router = express.Router();
const axios = require("axios");

const { buildRequestUrl } = require("./utils");
const { noDataResponse } = require("./constants");

router.get("/", function (req, res) {
  res.send("Search for your artist by appending id to this url");
});

router.get("/:artistId", (req, res) => {
  const artistId = req.params.artistId;
  try {
    axios
      .get(buildRequestUrl(artistId))
      .then((respData) => {
        return res.status(200).send(respData?.data || noDataResponse);
      })
      .catch((err) => res.send(err));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
