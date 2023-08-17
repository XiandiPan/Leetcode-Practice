/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // Use two pointers to swap vowels
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    
    let left = 0;
    let right = s.length - 1;
    let a = s.split('');

    while (left < right) {
        if (vowels.includes(a[left]) && vowels.includes(a[right])) {
            [a[left], a[right]] = [a[right], a[left]];
            left++;
            right--;
        } else if (!vowels.includes(a[left])) {
            left++;
        } else if (!vowels.includes(a[right])) {
            right--;
        }
    }

    return a.join('');
};