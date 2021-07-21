QUnit.module("About Arrays (topics/about_arrays.js)");

QUnit.test("array literal syntax and indexing", (assert) => {
    var favouriteThings = ["cellar door", 42, true]; // Note that array elements do not have to be of the same type
    assert.equal("cellar door", favouriteThings[0], "what is in the first position of the array?");
    assert.equal(42, favouriteThings[1], "what is in the second position of the array?");
    assert.equal(true, favouriteThings[2], "what is in the third position of the array?");
});

QUnit.test("array type", (assert) => {
    assert.equal("object", typeof [], "what is the type of an array?");
});

QUnit.test("length", (assert) => {
    var collection = ["a", "b", "c"];
    assert.equal(3, collection.length, "what is the length of the collection array?");
});

QUnit.test("splice", (assert) => {
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var workingWeek = daysOfWeek.splice(0, 5);
    var weekend = daysOfWeek;

    assert.deepEqual(workingWeek, ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "what is the value of workingWeek?");
    assert.deepEqual(weekend, ["Saturday", "Sunday"], "what is the value of weekend?");
});

QUnit.test("stack methods", (assert) => {
    var stack = [];
    stack.push("first");
    stack.push("second");

    assert.equal("second", stack.pop(), "what will be the first value popped off the stack?");
    assert.equal("first", stack.pop(), "what will be the second value popped off the stack?");
});

QUnit.test("queue methods", (assert) => {
    var queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    assert.equal("third", queue.shift(), "what will be shifted out first?");
    assert.equal("first", queue.shift(), "what will be shifted out second?");
});
