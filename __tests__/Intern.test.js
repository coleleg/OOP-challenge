const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern("John Doe", "12345", "intern@company.com", "UCF");

    expect(intern.name).toBe("John Doe");
    expect(intern.id).toEqual("12345");
    expect(intern.email).toBe("intern@company.com");
    expect(intern.school).toBe("UCF");
});

test(`returns intern's school`, () => {
    const intern = new Intern("John Doe", "12345", "intern@company.com", "UCF");

    expect(intern.getSchool()).toBe("UCF");
});

test(`returns 'Intern'`, () => {
    const intern = new Intern("John Doe", "12345", "intern@company.com", "UCF");

    expect(intern.getRole()).toBe("Intern");
});