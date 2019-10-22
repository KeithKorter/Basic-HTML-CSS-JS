// Convert a number into a string, keeping only two decimals:
function precision_Method () {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toFixed(2);
}
//Return the primitive value of a string object:
function myFunction() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
  }