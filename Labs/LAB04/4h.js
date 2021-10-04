function getNums(numbers) {
    numbers.sort();
    return "" + numbers[1] + " and " + numbers[numbers.length - 2];
}

console.log(getNums([1, 2, 3, 4, 5, 6, 7, 8, 9]))