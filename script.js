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
