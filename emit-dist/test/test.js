import {strict as assert} from "node:assert/strict";
import {add, sub, mul, div} from "../src/moremath.js";

assert.equal(add(2,3), 5);
assert.equal(sub(7,4), 3);
assert.equal(mul(2,3), 6);
assert.equal(div(9,3), 3);