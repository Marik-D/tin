function func(num) {
    fact = num;
    if (num === 0) return 1;
    for (i = 1; i < num; i++) {
        fact *= i;
    }
    return fact;
}

const factorial = (number) => {
    if (number === 0) {
        return 1;
    } else {
        return (number * factorial(number - 1));
    }
};

console.log(func(4));
console.log(factorial(5));