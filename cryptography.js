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
        let output = "";
        for (var i = 0; i < string.length; i++) {
            if (i % 8 == 0) {
                output += " ";
            }
            output += string[i];
        }

        return output;
    }

    caesar(str, direction,key) {
        if (direction == "right") {
            return this._rot3(str,parseInt(key))
        } else {
            return this._rot4(str,parseInt(key))
        }
    }

    _rot3(str, key, regex = /[\W]/g) {
        return str.toUpperCase()
          .split("")
          .map((i) => (
            regex.test(i) ? i : i.charCodeAt() > 64 && i.charCodeAt() < 100 ? 
            String.fromCharCode(
              i.charCodeAt() + key > 90 ? 
              i.charCodeAt() + key - 26 : 
              i.charCodeAt() + key)
              : i))
          .join("");
    }
    
    _rot4(str, key, regex = /[\W]/g) {
        return str.toUpperCase()
          .split("")
          .map((i) => (
            regex.test(i) ? i : i.charCodeAt() > 64 && i.charCodeAt() < 100 ? 
            String.fromCharCode(
              i.charCodeAt() - key < 65 ? 
              i.charCodeAt() - key + 26 : 
              i.charCodeAt() - key)
              : i))
          .join("");
    }    
}

let cript = new Cryptography();

exports.cript = cript;