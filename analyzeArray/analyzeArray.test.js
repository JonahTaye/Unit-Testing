import { analyzeArray } from "./analyzeArray.js"

describe("Test analyzeArray Function", () => {
    test("Test I", () => {
        const result = {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(result)
    })
    test("Test II", () => {
        const result = {
            average: 6,
            min: 2,
            max: 8,
            length: 6
        }
        expect(analyzeArray([8, 8, 7, 4, 2, 6])).toEqual(result)
    })
})