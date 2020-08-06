require("dotenv").config();
var express= require("express");
var app=express();
var methodOverride=require("method-override")
var bodyParser=require("body-parser");
var mongoose =require("mongoose");
var passport =require("passport");
var flash =require("connect-flash")
var LocalStrategy=require("passport-local");
var User=require("./models/user");
var Campground =require("./models/campground");
var Comment =require("./models/comment");
var seedDB =require("./seeds");
var commentRoutes=require("./routes/comments")
var campgroundRoutes=require("./routes/campground")
var indexRoutes=require("./routes/index")


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.use(express.static("public"));
app.use(methodOverride("_method"));
app.use(flash());

//seedDB();

//PASSPORT CONFIGURATION
app.use(require("express-session")({
	secret:"once again i win",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
	res.locals.currentUser=req.user;
	 res.locals.error=req.flash("error");
	res.locals.success=req.flash("success");
	next();
})

app.use("/",indexRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);

app.listen(process.env.PORT || 1245, process.env.IP,function(){
	console.log("yelcamp started");
});
