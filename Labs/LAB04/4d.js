function sortString(str) {
    let arr = str.split('');
    let sorted = arr.sort();
    return sorted.join('');
}

console.log(sortString("webmaster"));