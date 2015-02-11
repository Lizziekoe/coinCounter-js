var coinCounter = function(change) {

var result = {}
  while (change > 0) {
    if (change >= 25) {
      var quarterRemainder = change % 25;
      var quarters = (change - quarterRemainder)/25;
      result["quarters"]= quarters;
      change -= (quarters * 25);
    } else if (change >= 10) {
      var dimeRemainder = change % 10;
      var dimes = (change - dimeRemainder)/10;
      result["dimes"]= dimes;
      change -= (dimes * 10);
    } else if (change >= 5) {
      var nickelRemainder = change % 5;
      var nickels = (change - nickelRemainder)/5;
      change -= (nickels * 5);
      result["nickels"]= nickels;
    } else if (change >= 1) {
      var pennyRemainder = change % 1;
      var pennies = (change - pennyRemainder);
      change -= (pennies);
      result["pennies"]=pennies;
    }
  }
  return result;
};

$(document).ready(function(){
  $("form#changeForm").submit(function(event) {
    var number = parseInt($("input#number").val());
    var results = coinCounter(number);

    $("#quarter").text("");
    $("#dime").text("");
    $("#nickel").text("");
    $("#penny").text("");
    $("#results").show()


    $("#quarter").text(results.quarters);
    $("#dime").text(results.dimes);
    $("#nickel").text(results.nickels);
    $("#penny").text(results.pennies);
    $("#results").show()


    event.preventDefault();
  });
});
