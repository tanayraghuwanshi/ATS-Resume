const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("user/signup.ejs");
}

module.exports.signup = async (req, res) => {
    let {username, email, password} = req.body;
    let newUser = new User({email, username});
    let regiteredUser = await User.register(newUser, password);
    console.log(regiteredUser);
    req.logIn(regiteredUser, (err) => {
        if(err) {
            return next(err);
        }
        req.flash("success", `Welcome to TrekInn, ${username}`);
        res.redirect("/listings");
    })
   

}

module.exports.renderLoginForm = (req, res) => {
    res.render("user/login.ejs");
}

module.exports.login = async (req, res) => {
    req.flash("success", "Welcome Back to TrekInn! ");
    const redirectUrl = res.locals.redirecturl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logOut((err) => {
        if(err){
           return next(err);
        }
        req.flash("success", "Logged Out Succesfully, We Will Miss You....");
        res.redirect("/listings");
    })
}