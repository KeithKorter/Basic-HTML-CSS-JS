//The break statement breaks the loop and continues executing the code after the loop (if any):
function break_Function() {

        var text = "";
var i;
for (i = 0; i < 10; i++) {

  if (i === 3) { break; }

 text += "The number is " + i + "<br>";
  console.log (text)
    }
    document.getElementById("break").innerHTML = i;
}


//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
function cont_Function() {

    var text = "";
    var i;
    for (i = 0; i < 10; i++) {
      if (i === 3) { continue; }
      text += "The number is " + i + "<br>";
    }
document.getElementById("cont").innerHTML = i;
}