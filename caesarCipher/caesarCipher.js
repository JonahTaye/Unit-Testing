export function caesarCipher(string, key) {
    if(key > 26) {key = key % 26}

    let cipher = []
    const regex = /[A-Z]|[a-z]/
    const capital = /[A-Z]/
    for(let i = 0; i < string.length; i++) {
        if(!regex.test(string[i])) {
            cipher.push(string[i])
            continue
        }
        let char = string.charCodeAt(i) + key

        if(!capital.test(string[i]) && char > 122 
            || capital.test(string[i]) && char > 90
        ) char = char - 26

        cipher.push(String.fromCharCode(char))
    }

    return cipher.join("")
}

// console.log(caesarCipher("xy,Z", 3))