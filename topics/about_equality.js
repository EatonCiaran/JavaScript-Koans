QUnit.module("About Equality (topics/about_equality.js)");

QUnit.test("numeric equality", (assert) => {
    assert.equal(3 + 4, 7, "what happens when you add two numbers?");
});

QUnit.test("string equality", (assert) => {
    assert.equal("3" + "7", "37", "what happens when you add two strings?");
});

QUnit.test("equality without type coercion", (assert) => {
    assert.ok(3 === 3, "what is exactly equal to 3?");
});

QUnit.test("equality with type coercion", (assert) => {
    // You answer must be a string to be zen
    assert.ok(3 == "3", "what string is equal to 3, with type coercion?");
});

QUnit.test("string literals", (assert) => {
    assert.equal('frankenstein', "frankenstein", "quote types are interchangeable, but must match.");
    assert.equal("frankenstein", 'frankenstein', "quote types can use both single and double quotes.");
});
