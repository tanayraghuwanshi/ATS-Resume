module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.redirectURL = req.originalUrl;
        req.flash("error","Please Login to Conitnue!");
        return res.redirect("/user/login");
    }
    next();
}

module.exports.saveUrl = (req, res, next) => {
    if(req.session.redirectURL){
        res.locals.redirecturl = req.session.redirectURL;
    }

    next();
}