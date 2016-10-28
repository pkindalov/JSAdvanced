/**
 * Created by r3v3nan7 on 26.10.16.
 */

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}


module.exports = {isOddOrEven};