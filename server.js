const express = require('express');
const mongoose= require('mongoose');
const cors=require('cors');

require("dotenv").config();


const app=express();
const port=process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

//DB Connection
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

const articleRouter=require("./routes/articles")
app.use("/articles", articleRouter);

  app.listen(port, () => {
  console.log("server is running on", port);
});
