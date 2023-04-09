const sumAll = function(first, second) {
    let sum = 0
    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)) {
        return "ERROR"
    }
    if (first < second) {
        let nextNum = first
        for (i = first; i <= second; i++) {
            sum += nextNum
            nextNum++
        }
        return sum
    }
    else if (first > second) {
        let nextNum = second
        for (i = second; i <= first; i++) {
            sum += nextNum
            nextNum++
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
