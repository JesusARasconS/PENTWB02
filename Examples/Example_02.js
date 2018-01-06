
var b= false;
app.onready =  function (e) {
	//var x = "value";
	//var x = [];
	//var fruit = ["apple", "orange","banana"];
	var fruit = ["apple", "orange","banana","strawberry","cherry"];
	//var vegetables = ["carrot","broccoli","cauliflovd"];
	
	/*fruit.push("pear");
	fruit.pop();
	log(fruit);
	log(fruit.sort());*/
	
	//fruit = fruit.concat(vegetables);
	//fruit = fruit.slice(0,1);
	//fruit = fruit.splice(1,2,"melon","grape");
	//fruit.splice(1,2,"melon","grape");
	//fruit = fruit.map(function (i) { return i.toUpperCase()});
	//fruit = fruit.map(function (i) { return "fred"});
	//fruit = fruit.map(function (i) { return { fruitName: i }});
	//fruit = fruit.filter(function (i) { return i[0] === "a"; });
	
	//log(fruit);
	//log (fruit.every(function (i) { return i[0] === "a"; }));
	//log (fruit.every(function (i) { return i.length > 0; }));
	//log (fruit.some(function (i) { return i.length > 0; }));
	//log (fruit.some(function (i) { return i[0] === "a"; }));
		
	//every is equivalent in c# to all
	//some is equivalent in c# to any
	
	/*
	fruit.forEach(function (i) {
	
	});
	
	log();
	*/
	
	//var dog = {};
	//dog.breed = "German Shepherd";
	//dog.bark = function() { log("woof");};
	
	//Object Initializer Syntax
	var dog = {
		breed: "German Shepherd",
		bark: function() {}
	};
	
	//Jason
	var dog = {
		"breed": "German Shepherd"
	};
	
	var dog = { "breed": "German Shepherd" };
	{ "breed": "German Shepherd" };
	
};

function log(msg) {
}