module.exports = function addNNumbers(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}