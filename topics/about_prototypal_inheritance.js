// Demonstrate the effect of modifying an objects prototype before and after the object is constructed

module("About Prototypal Inheritance (topics/about_prototypal_inheritance.js)");

// This 'class' pattern defines a class by its constructor
var Mammal = function (name) {
    this.name = name;
};
// Things that don't need to be set in the constructor should be added to the constructor's prototype property.
Mammal.prototype = {
    sayHi: function () {
        return "Hello, my name is " + this.name;
    },
};

test("defining a 'class'", function () {
    var eric = new Mammal("Eric");
    equal("Hello, my name is Eric", eric.sayHi(), "what will Eric say?");
});

// Add another function to the `Mammal` class. Make use of the existing `sayHi` function 
Mammal.prototype.favouriteSaying = function () {
    return this.name + "'s favourite saying is " + this.sayHi();
};

test("more functions", function () {
    var bobby = new Mammal("Bobby");
    equal("Bobby's favourite saying is Hello, my name is Bobby", bobby.favouriteSaying(), "what is Bobby's favourite saying?");
});

test("calling functions added to a prototype after an object was created", function () {
    var paul = new Mammal("Paul");
    Mammal.prototype.numberOfLettersInName = function () {
        return this.name.length;
    };
    // The following statement asks the `paul` object to call a function that was added
    // to the `Mammal` prototype after `paul` was constructed.
    equal(4, paul.numberOfLettersInName(), "how long is Paul's name?");
});

// Helper function for inheritance.
// from https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_Revisited
function extend(child, supertype) {
    child.prototype = supertype.prototype;
}

// "Subclass" Mammal
function Bat(name, wingspan) {
    Mammal.call(this, name);
    this.wingspan = wingspan;
}

// Configure inheritance
extend(Bat, Mammal);

test("inheritance", function () {
    var lenny = new Bat("Lenny", "1.5m");
    equal("Hello, my name is Lenny", lenny.sayHi(), "what does Lenny say?");
    equal("1.5m", lenny.wingspan, "what is Lenny's wingspan?");
});
