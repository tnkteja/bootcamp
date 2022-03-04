import { expect, it } from "@jest/globals";
import { test } from "jest-circus";
import {capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./t";

it("camel c capitalized is Camel", () => {
    expect(capitalize("camel")).toBe("Camel");
});

it("camel reversed is lemac", ()=> {
    expect(reverseString("camel")).toBe("lemac")
});

it("1 + 1 = 2", ()=> {
expect(calculator.add(1,1)).toEqual(2);
})

it("1 - 1 = 0", ()=> {
    expect(calculator.subtract(1,1)).toBe(0);
})

it("10 / 2 = 5", () => {
    expect(calculator.divide(10,2)).toBe(5);
} )

it("2 * 5 = 10", ()=> {
    expect(calculator.multiply(2,5)).toEqual(10);
})

it("abc caesar is bcd", ()=> {
    expect(caesarCipher("abc")).toBe("bcd");
})

it("[1,8,3,4,2,6] average is 4, min is 1, max is 8, length is 6", ()=> {
    let array = [1,8,3,4,2,6];
    let result = analyzeArray(array);
    expect(result.average).toBe(4);
    expect(result.min).toBe(1);
    expect(result.max).toBe(8);
    expect(result.length).toBe(6);
})