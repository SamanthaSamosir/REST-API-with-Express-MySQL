const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");

const app=express();

var corsOptions={
  origin: "http://3.1.213.152:8081"
};

app.use(cors(corsOptions));

//for json type
app.use(bodyParser.json());

//for req x-www-urlencoded type
app.use(bodyParser.urlencoded({extended: true}));

const db = require("./app/models");

db.sequelize.sync();

//route
app.get("/", (req, res) => {
  res.json({ message: "Hai, Samantha!" });
});

require("./app/routes/task.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}.`);
});