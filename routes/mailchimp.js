const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: name,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const listID = `8c47d02b74`;
  const APIKey = `8b7c07e152f2c6ca5fc27c9845a67154-us17`;
  const user = `adeoyeao`;
  const url = `https://us17.api.mailchimp.com/3.0/lists/${listID}`;
  const options = {
    method: "POST",
    auth: `${user}:${APIKey}`,
  };

  const request = https.request(url, options, (response) => {
    response.statusCode == 200
      ? res.render("contact", {
          header: `Thanks, you're up and running`,
          message: `Your invite should be with you in the next 30 mins`,
          result: `success`,
          title: `Subscribed`,
        })
      : res.render("contact", {
          header: `Something's gone wrong :(`,
          message: `Let's try that one again`,
          result: `failure`,
          title: `404`
        });
  });

  request.write(jsonData);
  request.end();
});

module.exports = router;
