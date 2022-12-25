// Test data
const strArray1 = ["aaa", "bbb", "ccc", "ddd"];
const numArray = [45, 7, 6, 32, 5, 3, 6, 3, 2, 4, 6, 4, 2];
const strArray2 = ["hello", "world", "I", "am", "a", "JS", "developer"];


// 1.Write function arrayCopy that gets the following parameters :
// function arrayCopy(src,srcPos,dst,dstPos,length) {....} where:
// src - source array, srcPos - index of the source array, dst - array destination,
// dstPos - index of destination array, length - number of elements.
// This function should copy length elements from src array beginning from srcPos
// index to dst array from dstPos index Apply the following array functions (splice and slice)

function test1() {
    let resArr = ["lll", "mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll", "mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}

function arrayCopy(src, srcPos, dst, dstPos, length) {
    let scrSliced = src.slice(srcPos, (srcPos + length))
    return dst.splice(dstPos, 0, ...scrSliced);
}

// 2.Write function count that returns how many times a given element encountered
// in a given array. Example of input array Const strings=["abc","lmn","cd","abc",
// "abc"] Output for the above example count(strings,"abc") will be3 and count
// (strings,"ab") will be 0.Apply the array function reduce.

function test2() {
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray, 6)); // expected 3
    console.log(count(numArray, -10)); // expected 0
}

function count(array, str) {
    counter = 0;
    let res = array.reduce((sum, item) => {
        if (item === str)
            counter++;
    }, {})
    return counter;
}

//3. Write function displayOccurrences(array).Array contains the repeated strings,
// for example [‘abc’, ‘lmn’, ‘abc’, ‘lmn’,’lmn’, ‘prst’, ‘ab’] The function should
// display out the words and how many times each word is encountered in the array
// in the formatas shown below. The words order isn’t defined.
// For example: abc -> 2 lmn -> 3 prst ->1 ab ->1
function test3() {
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}

function displayOccurrences(array) {
    let res = array.reduce(function (sum, curr) {
        sum[curr] = (sum[curr] || 0) + 1;
        return sum;
    }, {})
    console.log(res);
}

//4.Write function ulSurround that surrounds array of strings inside <ul></ul> element.
// Example of input array const strings=["abc","lmn","cd"] Output array for the above
// example- const ulSurrounding=ulSurround(strings)
// ["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]
// Apply the array functions: splice and map

function test4() {
    const res = ulSurround(strArray1);
    console.log(res);
}

function ulSurround(strings) {
    let resHTML = '<ul>' +
        strings.map(function (value) {
            return '<li>' + value + '</li>';
        }).join('') + '</ul>';
    return resHTML;
}

//5. Write a method that will sort an array of strings in order of string length
// from shortest to longest

function test5() {
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}

function lengthSort(array) {
    let arrWithLegth = array.map(function (value) {
        return {str: value, strLength: value.length}
    })
    let sorted = arrWithLegth.sort(function (a, b) {
        return (a.strLength - b.strLength);
    })
    let res = sorted.map(function (value) {
        return value.str;
    })
    return res;
}