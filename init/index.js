const mongoose = require("mongoose");
const initData = require("./sample_hotels_static_images.js")
const Listing = require("../models/listing");


const mongoUrl = "mongodb://127.0.0.1:27017/wanderlust";

main().then((res) => {
    console.log("Database Connected Succesfully");
}).catch((err) => console.log(err));

async function main(){
    await mongoose.connect(mongoUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "687fca34f6abaa79d7e68e99",
        rating: Math.floor(Math.random() * 5) + 1
    })) 

    await Listing.insertMany(initData.data);

    console.log("database intialized succeesfully");
}

initDB();