function fibonacci(n) {
    var output = [];
    if (n === 1) {
        output = [1];
    } else if (n === 2) {
        output = [1, 1];
    } else {
        output = [1, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 1] + output[output.length - 2]);
        }
    }
    return output;
}

function printAllFibonacciSequences(upTo) {
    for (var i = 1; i <= upTo; i++) {
        console.log(fibonacci(i).join(', '));
    }
}

// Exemplo de uso:
printAllFibonacciSequences(10);
// Output:
// 1
// 1, 1
// 1, 1, 2
// 1, 1, 2, 3
// 1, 1, 2, 3, 5






// function fibonacci(n) {
//     var output = [];
//     if (n === 1) {
//         output = [1];
//     } else if (n === 2) {
//         output = [1, 1];
//     } else {
//         output = [1, 1];
//         for (var i = 2; i < n; i++) {
//             output.push(output[output.length - 1] + output[output.length - 2]);
//         }
//     }
//     return output;
// }

// function allFibonacciSequences(upTo) {
//     var allSequences = [];
//     for (var i = 1; i <= upTo; i++) {
//         allSequences.push(fibonacci(i));
//     }
//     return allSequences;
// }

// // Exemplo de uso:
// console.log(allFibonacciSequences(5));
// // Output: [[1], [1, 1], [1, 1, 2], [1, 1, 2, 3], [1, 1, 2, 3, 5]]