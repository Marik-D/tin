function fibbo(num) {
    if (num === 1) {
        return 0;
    } else if (num === 2 || num === 3) {
        return 1;
    } else {
        return fibbo(num - 1) + fibbo(num - 2);
    }
}

console.log(fibbo(11));