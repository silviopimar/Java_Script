// Cáculo de fatorial de forma recursiva
// 5! 5 x 4 x 3 x 2 x 1
// 5! x 4!
// n! = n x (n - 1)!
function fatorial(num) {
    if (num == 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}
console.log(fatorial(5))