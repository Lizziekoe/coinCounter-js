describe('coinCounter', function() {
  it("can tell if the change is only quarters", function() {
    expect(coinCounter(75)).to.eql({"quarters": 3});
  });
  it("can tell if the change is only dimes", function() {
    expect(coinCounter(20)).to.eql({"dimes": 2});
  });
  it("can tell if the change is a nickel", function() {
    expect(coinCounter(5)).to.eql({"nickels": 1});
  });
  it("can tell if the change is only pennies", function() {
    expect(coinCounter(4)).to.eql({"pennies": 4});
  });
  it("can tell if the change has dimes and quarters", function() {
    expect(coinCounter(35)).to.eql({"quarters": 1, "dimes": 1});
  });
});
