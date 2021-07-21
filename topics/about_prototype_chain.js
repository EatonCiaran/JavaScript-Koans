// Demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
QUnit.module("About Prototype Chain (topics/about_prototype_chain.js)");

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

QUnit.test("is there an `a` and `b` own property on `child`?", (assert) => {
    assert.equal(true, child.hasOwnProperty("a"), "what is the value of `child.hasOwnProperty('a')`?");
    assert.equal(true, child.hasOwnProperty("b"), "what is the value of `child.hasOwnProperty('b')`?");
});

QUnit.test("is there an `a` and `b` property on `child`?", (assert) => {
    assert.equal(1, child.a, "what is the value of `a`?");
    assert.equal(2, child.b, "what is the value of `b`?");
});

QUnit.test("if `b` was removed, what is the value of `b`?", (assert) => {
    delete child.b;
    assert.equal(3, child.b, "what is the value of `b` now?");
});

QUnit.test("is there a `c` own property on `child`?", (assert) => {
    assert.equal(false, child.hasOwnProperty("c"), "what is the value of `child.hasOwnProperty('c')`?");
});

// Is there a `c` own property on `child`? No, check its prototype
// Is there a `c` own property on child.[[Prototype]]? Yes, its value is...
QUnit.test("is there a `c` property on `child`?", (assert) => {
    assert.equal(4, child.c, "what is the value of `child.c`?");
});

// Is there a `d` own property on `child`? No, check its prototype
// Is there a `d` own property on child.[[Prototype]]? No, check it prototype
// child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
QUnit.test("is there an `d` property on `child`?", (assert) => {
    assert.equal(undefined, child.d, "what is the value of `child.d`?");
});
