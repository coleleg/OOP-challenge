const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
    const engineer = new Engineer("John Doe", "12345", "engineer@company.com", "engineEar");

    expect(engineer.name).toBe("John Doe");
    expect(engineer.id).toEqual("12345");
    expect(engineer.email).toBe("engineer@company.com");
    expect(engineer.github).toBe("engineEar");
});

test(`returns Engineer's github username`, () => {
    const engineer = new Engineer("John Doe", "12345", "engineer@company.com", "engineEar");

    expect(engineer.getGitHub()).toBe("engineEar");
});

test(`returns 'Engineer'`, () => {
    const engineer = new Engineer("John Doe", "12345", "engineer@company.com", "engineEar");

    expect(engineer.getRole()).toBe("Engineer");
})

