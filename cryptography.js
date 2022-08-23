class Cryptography {
    constructor() {}

    binary(string, key) {
        if (key === "Decript") {
            return this.binarytostring(string);
        } else {
            return this.stringtobinary(string);
        }
    }

    stringtobinary(string) {
        var output = "";
        var input = string;
        for (var i = 0; i < input.length; i++) {
            output += "0" + input[i].charCodeAt(0).toString(2) + " ";
        }
        return output;
    }

    binarytostring(string) {
        return string.split(" ").map(function (elem) {
                if (elem === "") {
                } else {
                    return String.fromCharCode(parseInt(elem, 2));
                }
            }).join("");
    }
}

let cript = new Cryptography();

exports.cript = cript;