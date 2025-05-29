export function capitalize(string) {
    let stringCapitalized = ""
    let words = string.split(" ")

    words.forEach(word => word.charAt(0).toUpperCase() + word.slice(1))
    stringCapitalized = words.join(" ")
    
    return stringCapitalized
}