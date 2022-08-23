class Cryptography {
    constructor() {}

    binary(string, type) {
        if (type === "Decript") {
            return this._binarytostring(this._binarycorrection(string));
        } else {
            return this._stringtobinary(string);
        }
    }

    _stringtobinary(string) {
        var output = "";
        var input = string;
        for (var i = 0; i < input.length; i++) {
            output += "0" + input[i].charCodeAt(0).toString(2) + " ";
        }
        return output;
    }

    _binarytostring(string) {
        return string.split(" ").map(function (elem) {
                if (elem === "") {
                } else {
                    return String.fromCharCode(parseInt(elem, 2));
                }
            }).join("");
    }

    _binarycorrection(string) {
        let input = string;
        let output = "";
        let loop = 0;
        for (var i = 0; i < input.length; i++) {
            if (loop === 8) {
                output += " ";
                loop = 0;
                i--;
            } else {
                output += input[i];
                loop++;
            }
        }

        return output;
    }
}

let cript = new Cryptography();

exports.cript = cript;