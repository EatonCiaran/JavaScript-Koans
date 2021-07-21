module("About Equality (topics/about_equality.js)");

test("numeric equality", function () {
    equal(3 + 4, 7, "what happens when you add two numbers?");
});

test("string equality", function () {
    equal("3" + "7", "37", "what happens when you add two strings?");
});

test("equality without type coercion", function () {
    ok(3 === 3, "what is exactly equal to 3?");
});

test("equality with type coercion", function () {
    // You answer must be a string to be zen
    ok(3 == "3", "what string is equal to 3, with type coercion?");
});

test("string literals", function () {
    equal('frankenstein', "frankenstein", "quote types are interchangeable, but must match.");
    equal("frankenstein", 'frankenstein', "quote types can use both single and double quotes.");
});
