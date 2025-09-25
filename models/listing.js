const { ref } = require("joi");
const mongoose = require("mongoose");
const Schema  = mongoose.Schema;
const Review = require("./review.js");
const User = require("./user.js");

const ListingSchema = Schema({
    title : {
        type: String,
        required: true
    },

    description : String,

    image : {
        url : String,
        filename: String
    },

    price : Number,

    location : String,

    country : String,

    reviews: [{

        type: Schema.Types.ObjectId,
        ref: "Review"

    }],

    owner : {
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    rating: { 
        type: Number,
        min: 1,
        max: 5,
        default: 4
    },


});

ListingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id : {$in : listing.reviews}});
    }
})

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;