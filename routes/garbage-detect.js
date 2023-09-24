const { Router } = require("express");
const { userRouter } = require("./users");
const GrabageRoute = Router();
const axios = require("axios");
const fs = require("fs");
const threshold_confidence = 0.5;

const image = fs.readFileSync("trash.jpg", {
    encoding: "base64"
});
const image2 = fs.readFileSync("trashh.jpg", {
    encoding: "base64"
});

GrabageRoute.get("/detect", async (req, res) => {
    try {
        axios({
    method: "POST",
    url: "https://detect.roboflow.com/eco-mm2vp/1",
    params: {
        api_key: process.env.apikey,
    },
    data: image,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(function(response) {
    res.json(response.data);
    if (response.data.predictions[0].confidence >= threshold_confidence) {
        console.log("Valid Image");
    }
})
.catch(function(error) {
    console.log(error.message);
});
    } 
    catch (err) {
        res.json(err)
    }
})

module.exports = {GrabageRoute}