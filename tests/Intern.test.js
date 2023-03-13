const Intern = require("../lib/intern.js");

describe("Intern", () => {
  it ("Can set school via constructor", () => {
    const intern = new Intern("Austin", 6, "Austin@gmail.com", "MIT");
    expect(intern.school).toBe("MIT");
  });
});

describe("Intern", () => {
  it ("getRole() should return 'Intern'", () => {
    const intern = new Intern("Austin", 6, "Austin@gmail.com", "MIT");
    expect(intern.getRole()).toBe("Intern");
  });
});

describe("Intern", () => {
  it ("Can get school via getSchool()", () => {
    const intern = new Intern("Austin", 6, "Austin@gmail.com", "MIT");
    expect(intern.getSchool()).toBe("MIT");
  });
});