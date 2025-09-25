const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema} = require("../schema.js");
const { isLoggedIn } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error);
    }
    else{
        next();
    }
}


// Reviews
// POST Route
router.post("/", isLoggedIn,validateReview,wrapAsync(reviewController.createReview));


module.exports = router;