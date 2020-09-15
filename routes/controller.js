const express = require("express")
const path = require("path")
const storiesData = require("../data/data-stories.js")

const router = express.Router()

router.use(express.static(path.join(__dirname, "../public")))

router.get("/", (req, res) => {
      let title = `Home`
      res.render("index", {title: title})
})

router.get("/stories", (req, res) => {
      let title = `Stories`;
      res.render("stories", { title: title, storiesData : storiesData });
})

router.get("/features", (req, res) => {
      let title = `Features`;
      res.render("features", { title: title });
})

router.get("/pricing", (req, res) => {
      let title = `Pricing`;
      res.render("pricing", { title: title });
})

router.get("/payment-success", (req, res) => {
      let title = `Payment Success`;
      res.render("payment", {title: title})
})

module.exports = router