const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager("John Doe", "12345", "manager@company.com", "123");

    expect(manager.name).toBe("John Doe");
    expect(manager.id).toEqual("12345");
    expect(manager.email).toBe("manager@company.com");
    expect(manager.officeNumber).toBe("123");
});

test(`returns 'Manager'`, () => {
    const manager = new Manager("John Doe", "12345", "manager@company.com", "123");

    expect(manager.getRole()).toBe("Manager"); 
});