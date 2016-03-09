function compareNumbers(){
  //get the calue of input #a and input #b
var a = $("#a").val():
var b = $("#b").val():

var comparison = $("#comparison");

a = parseFloat(a);
b = parseFloat(b);

if ( a > b ) {
  //if a is greater than b
  comparsion.html('>');
}else if ( a < b ) {
  //if a is less than b
  comparison.html ('<');
}else if ( a === b ) {
  //if a is equal to b
}else{
  // something else is not right
  comparison.html('NaN');
}

}
$("submit").click(compareNumbers);
