// Demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
module("About Prototype Chain (topics/about_prototype_chain.js)");

var father = {
    b: 3,
    c: 4,
};

var child = Object.create(father);
child.a = 1;
child.b = 2;

/*
 * ---------------------- ---- ---- ----
 *                      [a]  [b]  [c]
 * ---------------------- ---- ---- ----
 * [child]               1    2
 * ---------------------- ---- ---- ----
 * [father]                   3    4
 * ---------------------- ---- ---- ----
 * [Object.prototype]
 * ---------------------- ---- ---- ----
 * [null]
 * ---------------------- ---- ---- ----
 * */

test("is there an `a` and `b` own property on `child`?", function () {
    equal(__, child.hasOwnProperty("a"), "what is the value of `child.hasOwnProperty('a')`?");
    equal(__, child.hasOwnProperty("b"), "what is the value of `child.hasOwnProperty('b')`?");
});

test("is there an `a` and `b` property on `child`?", function () {
    equal(__, child.a, "what is the value of `a`?");
    equal(__, child.b, "what is the value of `b`?");
});

test("if `b` was removed, what is the value of `b`?", function () {
    delete child.b;
    equal(__, child.b, "what is the value of `b` now?");
});

test("is there a `c` own property on `child`?", function () {
    equal(__, child.hasOwnProperty("c"), "what is the value of `child.hasOwnProperty('c')`?");
});

// Is there a `c` own property on `child`? No, check its prototype
// Is there a `c` own property on child.[[Prototype]]? Yes, its value is...
test("is there a `c` property on `child`?", function () {
    equal(__, child.c, "what is the value of `child.c`?");
});

// Is there a `d` own property on `child`? No, check its prototype
// Is there a `d` own property on child.[[Prototype]]? No, check it prototype
// child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
test("is there an `d` property on `child`?", function () {
    equal(__, child.d, "what is the value of `child.d`?");
});
