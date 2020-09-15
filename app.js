const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(require("./routes/controller.js"));
app.use(require("./routes/mailchimp.js"));
app.use(require("./routes/stripe.js"));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
