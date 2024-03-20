require("dotenv").config();

const path = require("path");
const express = require("express");
const connectDB = require("./config/DBconnect");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute");
const eventRoute = require("./routes/eventRoute");
const mongoose = require("mongoose");

const app = express();

//serve static files
app.use("/", express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(
    cors({
        origin: ["http://localhost:3000", "*"],
        credentials: true,
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    })
);

// app.use("/api/v1/cohorts", userRoute);
app.use("/api/v1/events", eventRoute);

app.get("/", (req, res) => {
    res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

connectDB();

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, console.log(`Server up and running on port ${PORT}`));
});
