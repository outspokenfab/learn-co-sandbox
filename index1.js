function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
    console.log("InnerScope Called");
    return innerVariable;
  }
}

var myScope = outerFunction();
 
// the stringified version of `innerScope()`
myScope;