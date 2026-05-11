const arr = [1, 2, 3, 4, 5];

// const result = arr.map((ele) => ele * 2);
// console.log("result==", result);

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    if (this === null) {
      throw new TypeError("Array.prototype.myMap called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError("callback passed is not an function");
    }

    let result = [];
    let O = Object(this);
    let length = O.length >>> 0;

    for (let i = 0; i < length; i++) {
      if (i in O) {
        let mappedValue = callback(O[i], i, O);
        result[i] = mappedValue;
      }
    }
    return result;
  };
}

const result = arr.myMap((ele) => ele * 2);

console.log("result==", result);
