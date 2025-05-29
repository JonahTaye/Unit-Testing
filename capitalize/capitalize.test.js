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
    test("Capitalizes a sentence with numbers and punctuations", () => {
        expect(capitalize("hello world! i'm 99")).toEqual("Hello World! I'm 99")
    })
    test("Numbers", () => {
        expect(capitalize(233).toEqual("Function accept only strings"))
    })
})