QUnit.module("About Regular Expressions (topics/about_regular_expressions.js)");

QUnit.test("exec", (assert) => {
    var numberFinder = /(\d).*(\d)/;
    var results = numberFinder.exec("what if 6 turned out to be 9?");
    assert.deepEqual(results, ["6 turned out to be 9", "6", "9"], "what is the value of `results`?");
});

QUnit.test("test", (assert) => {
    var containsSelect = /select/.test("  select * from users ");
    assert.equal(true, containsSelect, "does the string provided contain 'select'?");
});

QUnit.test("match", (assert) => {
    var matches = "what if 6 turned out to be 9?".match(/(\d)/g);
    assert.deepEqual(matches, ["6", "9"], "what is the value of `matches`?");
});

QUnit.test("replace", (assert) => {
    var pie = "apple pie".replace("apple", "strawberry");
    assert.equal("strawberry pie", pie, "what is the value of `pie`?");

    pie = "what if '6' turned out to be '9'?".replace(/\d/g, function (number) {
        // The second parameter can be a string or a function
        var map = { "6": "six", "9": "nine" };
        return map[number];
    });
    assert.equal("what if 'six' turned out to be 'nine'?", pie, "what is the value of `pie`?");
});

// THE END
