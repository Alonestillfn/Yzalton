const express = require("express");
const cors = require("cors")
const { connect } = require("./models/db")
const appRouters = require("./routes/appRoute");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;
require("dotenv").config();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(cookieParser()); 

connect();

app.use("/", appRouters)

app.listen(port, () => {
    console.log(`App listening at port ${port}`);
})  