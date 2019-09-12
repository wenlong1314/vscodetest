/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == "") {
        return 0;
    }
    let result = -1;
    for (let i = 0; i < haystack.length; i++) {
        let count = 0;
        for (let j = 0; j < needle.length; j++) {
            if (haystack.charAt[i + j] != needle.charAt[j]) {
                break;
            }
            else {
                count++;
            }
            if (count == needle.length) {
                result = i;
                return result;
            }
        }
    }
    return result;
};
console.log(strStr("hello", "ll"));
