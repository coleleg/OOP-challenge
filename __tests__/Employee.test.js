const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('John', 'Doe')

    expect(employee.name).toBe('John Doe')
})