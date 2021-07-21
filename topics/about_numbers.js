QUnit.module("About Numbers (topics/about_numbers.js)");

QUnit.test("types", (assert) => {
    var typeOfIntegers = typeof 6;
    var typeOfFloats = typeof 3.14159;
    assert.equal(true, typeOfIntegers === typeOfFloats, "are integers and floats the same type?");
    assert.equal("number", typeOfIntegers, "what is the javascript numeric type?");
    assert.equal(1, 1.0, "what integer number is equivalent to 1.0?");
});

QUnit.test("NaN", (assert) => {
    var resultOfFailedOperations = 7 / "apple";
    assert.equal(true, isNaN(resultOfFailedOperations), "what will satisfy the equals assertion?");
    assert.equal(false, resultOfFailedOperations == NaN, "is NaN == NaN?");
});
