// app create
const express = require("express");
const app = express();


//PORT find
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());

const fileupload = require("express-fileupload");
app.use(fileupload());


// db se connect
const db = require("./config/database");
db.connect();

//cloud se coonect
const cloudiinary = require("./config/cloudinary");
cloudinary.cloudinaryConnnect();

// api route
const Upload = require("./routes/fileupload");
app.use("api/v1/upload", Upload);

//activate server

app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
})