const Intern = require('../lib/Intern.js');

test('check intern role', () => {
    const intern = new Intern('abela', 56, 'abela@gmail.com', 'ryerson')
    expect(intern.name).toBe('abela')
    expect(intern.id).toBe(56)
    expect(intern.email).toBe('abela@gmail.com')
    expect(intern.getRole()).toBe('Intern')
    expect(intern.getSchool()).toBe('ryerson')
})