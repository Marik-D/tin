function binarySearch(arr, value) {
    let firstIndex = 0,
        lastIndex = arr.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (arr[middleIndex] != value && firstIndex < lastIndex) {
        if (value < arr[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > arr[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return (arr[middleIndex] != value) ? "not found" : middleIndex;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))