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
  var copyText = document.getElementById("output");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
