const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const stripe = require("stripe")(
  "sk_test_51HRa1uFOJvkphWsvtQl4r2tYXknO0kd3sZLA6VcCjySSoX6AXnKDtDHtnikz686NMNGlZH5iW5b8hYdUW6pOsC0f00Ex39asUK"
);

router.post("/basic-month", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Basic Monthly",
            images: [
              "https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            ],
          },
          unit_amount: 1900,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://photosnap-website.herokuapp.com/payment-success`,
    cancel_url: `https://photosnap-website.herokuapp.com/pricing`,
  });
  res.json({ id: session.id });
});

router.post("/basic-year", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Basic Yearly",
            images: [
              "https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            ],
          },
          unit_amount: 19000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://photosnap-website.herokuapp.com/payment-success`,
    cancel_url: `https://photosnap-website.herokuapp.com/pricing`,
  });
  res.json({ id: session.id });
});

router.post("/pro-month", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Pro Monthly",
            images: [
              "https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            ],
          },
          unit_amount: 3900,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://photosnap-website.herokuapp.com/payment-success`,
    cancel_url: `https://photosnap-website.herokuapp.com/pricing`,
  });
  res.json({ id: session.id });
});

router.post("/pro-year", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Pro Yearly",
            images: [
              "https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            ],
          },
          unit_amount: 39000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://photosnap-website.herokuapp.com/payment-success`,
    cancel_url: `https://photosnap-website.herokuapp.com/pricing`,
  });
  res.json({ id: session.id });
});

router.post("/business-month", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Business Monthly",
            images: [
              "https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            ],
          },
          unit_amount: 9900,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://photosnap-website.herokuapp.com/payment-success`,
    cancel_url: `https://photosnap-website.herokuapp.com/pricing`,
  });
  res.json({ id: session.id });
});

router.post("/business-year", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Business Yearly",
            images: [
              "https://images.unsplash.com/flagged/photo-1551592398-c320012bc1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
            ],
          },
          unit_amount: 99000,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `https://photosnap-website.herokuapp.com/payment-success`,
    cancel_url: `https://photosnap-website.herokuapp.com/pricing`,
  });
  res.json({ id: session.id });
});

module.exports = router;
