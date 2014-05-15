function Laptop( options ) {
	this.brand = options.brand || "Apple";
	this.model = options.model || "Macbook Air";
	this.screenSize = options.screenSize || "11 inch";
	this.hardDrive = options.hardDrive || "128 GB SSD";
	this.memory = options.memory || "8 GB";
	this.price = options.price || 1000;

	this.getPrice = function(){
		return this.price;
	}
}

//Decorator screenSize upgrade
function screenSizeUpgrade(laptop) {
	laptop.screenSize = "13 inch";
	laptop.price += 200;
	changeDOM('screenSizeOrder', laptop.screenSize + " display");
	changePrice('total', laptop.getPrice());
}

//Decorator hardDrive upgrade
function hardDriveUpgrade(laptop) {
	laptop.hardDrive = "256 GB SSD";
	laptop.price += 200;
	changeDOM('hardDriveOrder', laptop.hardDrive);
	changePrice('total', laptop.getPrice());
}

//Decorator memory upgrade
function memoryUpgrade(laptop) {
	laptop.memory = "16 GB";
	laptop.price += 200;
	changeDOM('memoryOrder', laptop.memory + ' RAM');
	changePrice('total', laptop.getPrice());
}

function changeDOM(id,value){
	var getDOM = document.getElementById(id);
	getDOM.innerHTML = value;
}

function changePrice(id,price){
	var getDOM = document.getElementById(id);
	getDOM.value = price;
}

// Define skeleton laptop factory
function LaptopFactory() {}

// Our default laptop class is Laptop. 1st prototype
LaptopFactory.prototype.laptopClass = Laptop;

// Our Factory method for creating new Bike instances. 
LaptopFactory.prototype.createLaptop = function ( options ) {
	switch(options.laptopType){
		case "laptop":
			this.laptopClass = Laptop;
			break;
	}
	return new this.laptopClass ( options );
};

// Instance of our laptop factory
var laptopFactory = new LaptopFactory();
var laptopBuild = laptopFactory.createLaptop({
});