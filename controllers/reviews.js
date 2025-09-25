const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview =  new Review(req.body.review);

    listing.reviews.push(newReview);
    newReview.author = req.user._id;
    await newReview.save();
    await listing.save();
    res.redirect(`/listings/${listing._id}`);
}