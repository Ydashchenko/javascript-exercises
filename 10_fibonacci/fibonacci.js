const fibonacci = function(index) {
    let fibArray = [1, 1]
    if (index < 1) {
        return 'OOPS'
    } else if (index == 1) {
        return fibArray[index]
    } else {
        for (i = 1; i < index - 1; i++) {
            let newEl = fibArray[fibArray.length-1] + fibArray[fibArray.length-2]
            fibArray.push(newEl)
        }
        console.log(fibArray)
        return fibArray[index-1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
