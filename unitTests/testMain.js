describe("showMessage", function() {

  it("делает конкатенацию строк Hello и World", function() {
    assert.equal(showMessage('Hello','World'), 'HelloWorld');
  });

});