QUnit.module("About Truthyness (topics/about_truthyness.js)");

QUnit.test("truthyness of positive numbers", (assert) => {
    var oneIsTruthy = 1 ? true : false;
    assert.equal(true, oneIsTruthy, "is one truthy?");
});

QUnit.test("truthyness of negative numbers", (assert) => {
    var negativeOneIsTruthy = -1 ? true : false;
    assert.equal(true, negativeOneIsTruthy, "is -1 truthy?");
});

QUnit.test("truthyness of zero", (assert) => {
    var zeroIsTruthy = 0 ? true : false;
    assert.equal(false, zeroIsTruthy, "is 0 truthy?");
});

QUnit.test("truthyness of null", (assert) => {
    var nullIsTruthy = null ? true : false;
    assert.equal(false, nullIsTruthy, "is null truthy?");
});
