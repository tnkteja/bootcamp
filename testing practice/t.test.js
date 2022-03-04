import { expect } from "@jest/globals";
import { test } from "jest-circus";
import {capitalize, reverseString} from "./t";

it("camel c capitalized is Camel", () => {
    expect(capitalize("camel")).toBe("Camel");
});

it("camel reversed is lemac", ()=> {
    expect(reverseString("camel")).toBe("lemac")
});