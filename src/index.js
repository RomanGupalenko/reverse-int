module.exports = function reverse (n) {
    let nToString = String(n);
    if (nToString[0] === "-") nToString = nToString.slice(1,);
    let result = nToString.split("").reverse().join("");
    return result;
}
