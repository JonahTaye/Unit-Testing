export function capitalize(string) {
    if(typeof string !== "string") return "Function accepts only strings"
    let stringCapitalized = ""
    let words = string.split(" ")

    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    stringCapitalized = words.join(" ")
    
    return stringCapitalized
}