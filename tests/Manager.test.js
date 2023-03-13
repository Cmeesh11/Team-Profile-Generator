const Manager = require("../lib/manager.js");

describe("Manager", () => {
  it ("Can set office number via constructor argument", () => {
    const manager = new Manager("Kevin", 34, "Kevin@gmail.com", 57);
    expect(manager.officeNumber).toBe(57); 
  });
});

describe("Manager", () => {
  it ("getRole() should return 'Manager'", () => {
    const manager = new Manager("Kevin", 34, "Kevin@gmail.com", 57);
    expect(manager.getRole()).toBe("Manager"); 
  });
});

describe("Manager", () => {
  it ("Can get office number via getOffice()", () => {
    const manager = new Manager("Kevin", 34, "Kevin@gmail.com", 57);
    expect(manager.getOffice()).toBe(57); 
  });
});

