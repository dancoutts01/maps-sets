[1,2,3,4]

ref

0: {Array(3) => true}
1: {Array(3) => false}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = array => new Set(array).size !== array.length

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(string) {
    const vowels = 'aeiou'
    const vowelMap = new Map();
    for (let char of string) {
        let lowerCaseChar = char.toLowerCase();
        if (vowels.includes(lowerCaseChar)) {
            if (vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
            } else {
                vowelMap.set(lowerCaseChar, 1)
            }
        }
    }
    return vowelMap

}