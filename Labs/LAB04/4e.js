function longestWord(str) {
    let words = str.split(" ");
    let max = words[0];
    words.forEach((word) => {
        if (word.length > max.length) {
            max = word;
        }
    });
    return max;
};

console.log(longestWord("sdfgh asfd sdf asdf asdfghtsvdfg dfscgvh xca"));