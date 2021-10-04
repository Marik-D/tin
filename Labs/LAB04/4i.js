function amountToCoins(amount, coins) {
    let amountToCoin = [];
    for (i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amountToCoin.push(coins[i]);
            amount -= coins[i];
        }
    }
    return amountToCoin.toString();
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));