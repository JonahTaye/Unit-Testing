import { caesarCipher } from "./caesarCipher.js"

describe("Caesar Cipher Function Test", () => {
    test("abc to def", () => {
        expect(caesarCipher("abc", 3)).toEqual("def")
    })
    test("xyz to abc", () => {
        expect(caesarCipher("xyz", 3)).toEqual("abc")
    })
    test("Capital letter test", () => {
        expect(caesarCipher("Hello", 3)).toEqual("KhOOr")
    })
    test("Punctuation mark test", () => {
        expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!")
    })
})