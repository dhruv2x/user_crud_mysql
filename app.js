require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/user.router");
app.use(express.json());

app.use("/api/users", userRouter);
app.listen(process.env.APP_PORT,()=>{
    console.log("dummy server is runnning");
})