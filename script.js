function reverse() {
  let str = document.getElementById("string");
  reverseString(str.value);
}

function reverseString(str) {
  document.getElementById("output").innerHTML = str
      .split("")
      .reverse()
      .join("");
  document.getElementById("input").innerHTML = str;
}

function copyText() {
  var text = document.getElementById("output");
  text.select();
  text.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + text.value);
}
