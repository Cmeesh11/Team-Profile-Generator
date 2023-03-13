const Employee = require("../lib/employee.js");

describe("Employee", () => {
  it ("Can instantiate Employee instance", () => {
    const employee = new Employee("Billy", 5, "Billy@gmail.com");
    expect(employee).toBeInstanceOf(Employee);
  });
});

describe("Employee", () => {
  it ("Can set name via constructor arguments", () => {
    const employee = new Employee("Billy", 5, "Billy@gmail.com");
    expect(employee.name).toBe("Billy");
  });
});

describe("Employee", () => {
  it ("Can set id via constructor arguments", () => {
    const employee = new Employee("Billy", 5, "Billy@gmail.com");
    expect(employee.id).toBe(5);
  });
});

describe("Employee", () => {
  it ("Can set email via constructor arguments", () => {
    const employee = new Employee("Billy", 5, "Billy@gmail.com");
    expect(employee.email).toBe("Billy@gmail.com");
  });
});

describe("Employee", () => {
  it ("Can get name via getName()", () => {
    const employee = new Employee("Billy", 5, "Billy@gmail.com");
    expect(employee.getName()).toBe("Billy");
  });
});

describe("Employee", () => {
  it ("Can get id via getId()", () => {
    const employee = new Employee("Billy", 5, "Billy@gmail.com");
    expect(employee.getId()).toBe(5);
  });
});

describe("Employee", () => {
  it ("Can get email via getEmail()", () => {
    const employee = new Employee("Billy", 5, "Billy@gmail.com");
    expect(employee.getEmail()).toBe("Billy@gmail.com");
  });
});

describe("Employee", () => {
  it ("getRole() should return 'Employee'", () => {
    const employee = new Employee("Billy", 5, "Billy@gmail.com");
    expect(employee.getRole()).toBe("Employee");
  });
});