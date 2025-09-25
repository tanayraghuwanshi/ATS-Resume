const Listing = require("../models/listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
    
}

module.exports.renderNewForm = (req, res) => {
    
    res.render("listings/new.ejs");
}

module.exports.listingDetails =  async (req, res) => {
    let { id } = req.params;
    let listing  = await Listing.findById(id).populate({
        path: "reviews",
        populate: { path: "author" }
    }).populate("owner");;
    res.render("listings/show.ejs", { listing });
}

module.exports.createListing = async (req, res, next) => {
    
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(req.file);
    let newListing =  new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    await newListing.save();
    req.flash("success", "Listing created successfully!");
    res.redirect("/listings");

   
}

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    let listing  = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currentUser.id)){
        req.flash("error", "Don't Have Permission to Edit!");
        return res.redirect("/listings");
    }
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        newListing.image = { url, filename };
        newListing.save();
    }
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success", "Listing Updated Succesfully!");
    res.redirect(`/listing/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    let listing = Listing.findById(id);
    // if(!listing.owner._id.equals(res.locals.currentUser.id)){
    //     req.flash("error", "Don't Have Permission to Edit!");
    //     return res.redirect("/listings");
    // }
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted Succesfully!");
    res.redirect("/listings");
}