require("dotenv").config();

const axios = require("axios");
const fs = require("fs");
const threshold_confidence = 0.5

const image = fs.readFileSync("trash4.jpg", {
    encoding: "base64"
});
const image2 = fs.readFileSync("trashh.jpg", {
    encoding: "base64"
});

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
    console.log(response.data);
    if (response.data.predictions[0].confidence >= threshold_confidence) {
        console.log("Valid Image");
    }
})
.catch(function(error) {
    console.log(error.message);
});


