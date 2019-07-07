const { expect } = require("chai");
require("dotenv").config();

describe("Test environment variable", () => {
  it("match environment variable", () => {
    expect(process.env.foo).to.equal("bar");
  });
});
