import { reverseString } from "./reverseString.js"

describe("Return the reverse of a string", () => {
    test("Reverse a word", () => {
        expect(reverseString("hello")).toEqual("olleh")
    })
    test("Reverse a sentence", () => {
        expect(reverseString("hello world")).toEqual("dlorw olleh")
    })
    test("Reverse a sentence while keeping capitalization", () => {
        expect(reverseString("HeLLo WorLd")).toEqual("dLorW oLLeH")
    })
    test("Reverse a sentence with punctuations", () => {
        expect(reverseString("hell.o world!")).toEqual("!dlorw o.lleh")
    })
})