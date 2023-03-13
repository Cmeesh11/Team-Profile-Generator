const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  describe("GitHub", () => {
    it ("Can set GitHub account via constructor", () => {
      const engineer = new Engineer("Mike", 1, "Mike@gmail.com", "mike");
      expect(engineer.github).toBe("mike");
    });
  });
});

describe("Engineer", () => {
  describe("getRole", () => {
    it ("getRole() should return 'Engineer'", () => {
      const engineer = new Engineer("Mike", 1, "Mike@gmail.com", "mike");
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});

describe("Engineer", () => {
  describe("Github", () => {
    it ("Can get GitHub username via getGithub()", () => {
      const engineer = new Engineer("Mike", 1, "Mike@gmail.com", "mike");
      expect(engineer.getGithub()).toBe("mike")
    });
  });
});