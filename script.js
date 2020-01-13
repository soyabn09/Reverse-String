function reverse() {
  var str = document.getElementById("string");
  reverseString(str.value);
}

function reverseString(str) {
  var newstring = str
    .split("")
    .reverse()
    .join("");
  document.getElementById("output").innerHTML = newstring;
}
