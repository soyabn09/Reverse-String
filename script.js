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

function copyElementText() {
    var text = document.getElementById("output").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}
