const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema} = require("../schema.js");
const { isLoggedIn } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listing.js");

const validateListing = (req, res, next) => {
    // let { error } = listingSchema.validate(req.body);
    // if(error){
    //     throw new ExpressError(400, error);
    // }
    // else{
    //     next();
    // }

    next();
}

router.route("/")
.get(wrapAsync(listingController.index)).post(upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));


//New Route
router.get("/new",isLoggedIn, listingController.renderNewForm);



// Edit Route
router.get("/:id/edit", isLoggedIn,wrapAsync(listingController.renderEditForm));


// Show, Delete and Update route
router.route("/:id")
.get(wrapAsync(listingController.listingDetails))
.put(upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,wrapAsync(listingController.deleteListing));




module.exports = router;