function longestUniqueSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let i = 0; i < s.length-1; i++) {
        const currentChar = s[i];
        if (charIndexMap[currentChar] >= start) {
            start = charIndexMap[currentChar] + 1;
        }
        charIndexMap[currentChar] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return s.substring(start, start + maxLength);
}

console.log(longestUniqueSubstring("pwwkew")); // Output: "wke"
