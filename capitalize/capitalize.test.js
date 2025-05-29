import { capitalize } from "./capitalize.js"

describe("Capitalize first letter of a string", () => {
    test("Capitalizes a word", () => {
        expect(capitalize("hello")).toEqual("Hello")
    })
    test("Capitalizes a word - regex test", () => {
        expect(capitalize("hello")).toMatch(/^[A-Z].+/)
    })
    test("Capitalizes a sentence", () => {
        expect(capitalize("hello world")).toEqual("Hello World")
    })
})