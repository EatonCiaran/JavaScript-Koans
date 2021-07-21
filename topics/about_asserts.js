QUnit.module("About Asserts (topics/about_asserts.js)");

QUnit.test("ok", (assert) => {
    assert.ok(true === true, "what will satisfy the `ok` assertion?");
});

QUnit.test("not ok", (assert) => {
    assert.ok(false === false, "what is a false value?");
});

QUnit.test("equal", (assert) => {
    assert.equal(2, 1 + 1, "what will satisfy the `equal` assertion?");
});
