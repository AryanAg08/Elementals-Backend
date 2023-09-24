require("dotenv").config();

// const axios = require("axios");
// const fs = require("fs");
// const threshold_confidence = 0.5

// const image = fs.readFileSync("trash4.jpg", {
//     encoding: "base64"
// });
// const image2 = fs.readFileSync("trashh.jpg", {
//     encoding: "base64"
// });

// axios({
//     method: "POST",
//     url: "https://detect.roboflow.com/eco-mm2vp/1",
//     params: {
//         api_key: process.env.apikey,
//     },
//     data: image,
//     headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//     }
// })
// .then(function(response) {
//     console.log(response.data);
//     if (response.data.predictions[0].confidence >= threshold_confidence) {
//         console.log("Valid Image");
//     }
// })
// .catch(function(error) {
//     console.log(error.message);
// });

const express = require('express')
 const {userRouter} = require('./routes/users');
 const {GrabageRoute} = require("./routes/garbage-detect");
const PORT = process.env.PORT || 5000;
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, 'routes')));
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")
});

app.get("/api", (req, res) => {
  res.send("hellow")
})


app.use("/API",userRouter)
app.use("/garbage", GrabageRoute);


app.listen(PORT,async ()=>{
   console.log(`Listening on PORT ${PORT}`)
})