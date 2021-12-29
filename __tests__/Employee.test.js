const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee("John Doe", "12345", "employee@company.com");

    expect(employee.name).toBe("John Doe");
    expect(employee.id).toEqual("12345");
    expect(employee.email).toBe("employee@company.com");
});

test(`returns employee's name`, () => {
    const employee = new Employee("John Doe", "12345", "employee@company.com");

    expect(employee.getName()).toBe("John Doe");
});

test(`returns employee id`, () => {
    const employee = new Employee("John Doe", "12345", "employee@company.com");

    expect(employee.getId()).toEqual("12345");
});

test(`returns employee's email`, () => {
    const employee = new Employee("John Doe", "12345", "employee@company.com");
    
    expect(employee.getEmail()).toBe("employee@company.com");
});

test(`returns 'employee'`, () => {
    const employee = new Employee("John Doe", "12345", "employee@company.com");
    
    expect(employee.getRole()).toBe("Employee");
});