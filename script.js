var str = document.getElementById("string").innerHTML;

function reverseString(str) {
    var newstring = str.split("").reverse().join("");
    document.getElementById("output").innerHTML = newstring;
}
