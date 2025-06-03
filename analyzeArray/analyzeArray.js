export function analyzeArray(array) {
    return {
        average: Math.round(array.reduce((tot, num) => tot + num, 0) / array.length),
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length
    }
}