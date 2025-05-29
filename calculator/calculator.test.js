import { calculator } from "./calculator.js"

describe("Test calculator methods", () => {
    test("Add two numbers", () => {
        expect(calculator.add(2, 3)).toEqual(5)
    })
    test("Subtract two numbers", () => {
        expect(calculator.subtract(3, 2)).toEqual(1)
    })
    test("Multiply two numbers", () => {
        expect(calculator.multiply(2, 3)).toEqual(12)
    })
    test("Divide two numbers", () => {
        expect(calculator.divide(8, 2)).toEqual(4)
    })
})