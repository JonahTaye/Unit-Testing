import { reverseString } from "./reverseString.js"

describe("Return the reverse of a string", () => {
    test("Reverse a word", () => {
        expect(reverseString("hello")).toEqual("olleh")
    })
    test("Reverse a sentence", () => {
        expect(reverseString("hello world")).toEqual("dlrow olleh")
    })
    test("Reverse a sentence while keeping capitalization", () => {
        expect(reverseString("HeLLo WorLd")).toEqual("dLroW oLLeH")
    })
    test("Reverse a sentence with punctuations", () => {
        expect(reverseString("hell.o world!")).toEqual("!dlrow o.lleh")
    })
})