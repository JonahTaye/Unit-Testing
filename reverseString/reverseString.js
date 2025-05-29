export function reverseString(string) {
    if(typeof string !== "string") return "Function accepts only strings"

    return string.split("").reverse().join("")
}