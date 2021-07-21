QUnit.module("About Scope (topics/about_scope.js)");

thisIsAGlobalVariable = 77;

QUnit.test("global variables", (assert) => {
    assert.equal(77, thisIsAGlobalVariable, "is `thisIsAGlobalVariable` defined in this scope?");
});

QUnit.test("variables declared inside of a function", (assert) => {
    var outerVariable = "outer";

    // This is a self-invoking function. Notice that it calls itself at the end ().
    (function () {
        var innerVariable = "inner";
        assert.equal("outer", outerVariable, "is `outerVariable` defined in this scope?");
        assert.equal("inner", innerVariable, "is `innerVariable` defined in this scope?");
    })();

    assert.equal("outer", outerVariable, "is `outerVariable` defined in this scope?");
    assert.equal("undefined", typeof innerVariable, "is `innerVariable` defined in this scope?");
});
