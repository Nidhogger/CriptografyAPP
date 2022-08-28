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
            regex.test(i) ? i : i.charCodeAt() > 64 && i.charCodeAt() < 91 ? 
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
            regex.test(i) ? i : i.charCodeAt() > 64 && i.charCodeAt() < 91 ? 
            String.fromCharCode(
              i.charCodeAt() - key < 65 ? 
              i.charCodeAt() - key + 26 : 
              i.charCodeAt() - key)
              : i))
          .join("");
    }    

    vigenere(str, key, direction){
        let arr = this._vigenereKey(key);
        let loops = 0;
        let output = "";
        let string = str.toUpperCase().replace(/[^A-Z]/g, "");
        let n = Math.round((string.length / arr.length) + 1);
        for (let i = 0; i < n; i++){
          for(let y = 0; y < arr.length; y++){
            let strL = string[loops + y];
            let arrL = arr[y];
            if(strL != "" && strL != null && strL != undefined){
              output += this.caesar(strL, direction,arrL);
            }
          }
          loops = loops + arr.length;
        }
        return output
      }

      _vigenereKey(str){
        let string = str.toUpperCase().replace(/[^A-Z]/g, "")
        return string.split("").map((i)=>{
          if(i.charCodeAt() > 64 && i.charCodeAt() < 91){
            return i.charCodeAt() - 65;
          }
        })
      }
}

let cript = new Cryptography();

exports.cript = cript;