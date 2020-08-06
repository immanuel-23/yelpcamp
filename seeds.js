var mongoose=require("mongoose");

var Campground =require("./models/campground");

var Comment=require("./models/comment")

var data =[{name:"Munnar,Kerla",image:"https://images.unsplash.com/photo-1591199519809-9cfccacac4d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",description:"This beautiful tourist spot is stationed at the district of Idukki. Ornated with a plethora of lush green mountains, valleys and landscapes, waterfalls and breathtaking views of the nature, along with a tranquil setting, Munnar is one of the few must-see and experience places in India."},
		  {name:"Kanyakumari,Tamil Nadu",image:"https://i.pinimg.com/236x/81/ce/c7/81cec7d5119c7bb17061cee49316f27d.jpg",description:"Kanyakumari is a coastal town in the state of Tamil Nadu on India's southern tip. Jutting into the Laccadive Sea, the town was known as Cape Comorin during British rule and is popular for watching sunrise and sunset over the ocean. It's also a noted pilgrimage site thanks to its Bagavathi Amman Temple, dedicated to a consort of Shiva, and its Our Lady of Ransom Church, a center of Indian Catholicism."},
		  {name:"Marina Beach,Tamil nadu",image:"https://i.pinimg.com/236x/b1/c5/46/b1c5461cd4bb12e6b54c465d6839f7aa.jpg",description:"Marina Beach is a natural urban beach in Chennai, Tamil Nadu, India, along the Bay of Bengal. The beach runs from near Fort St. George in the north to Foreshore Estate in the south, a distance of 6.0 km, making it the longest natural urban beach in the country. The Marina is primarily sandy, unlike the short, rocky formations that make up the Juhu Beach in Mumbai. The average width of the beach is 300 m and the width at the widest stretch is 437 m. Bathing and swimming at the Marina Beach are legally prohibited because of the dangers, as the undercurrent is very turbulent. It is one of the most crowded beaches in the country and attracts about 30,000 visitors a day during weekdays and 50,000 visitors a day during the weekends and on holidays. During summer months, about 15,000 to 20,000 people visit the beach daily. "},
		  {name:"Lonavla,Maharashtra",image:"https://images.unsplash.com/photo-1593266314085-c349a6e877b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",description:"Lonavala is a hill station surrounded by green valleys in western India near Mumbai. The Karla Caves and the Bhaja Caves are ancient Buddhist shrines carved out of the rock. They feature massive pillars and intricate relief sculptures. South of the Bhaja Caves sits the imposing Lohagad Fort, with its 4 gates. West of here is Bhushi Dam, where water overflows onto a set of steps during rainy season."}]
		  

function seedDB(){
	//remove all campgrounds
		Campground.remove({},function(err){
		if(err){
				console.log(err);
				}
			console.log("removed campgrounds!");
			data.forEach(function(seed){
				Campground.create(seed,function(err,campground){
					if(err){
						console.log(err)
					}else{
						console.log("added a campgrounds")
						Comment.create({
							text:"This place is greate, but I wish there was internet",
							author:"home"
						},function(err,comment){
							if(err){
								console.log(err);
							}else{
							campground.comments.push(comment);
							campground.save();
							console.log("created a new campground")
							}
						});
						}
				});
		
			});
		});
	
}

module.exports=seedDB;