const Engineer = require('../lib/Engineer.js');

test('check engineer role', () => {
    const engineer = new Engineer('stef', 6, 'sf@gmail.com', 'steffgithubusername')
    expect(engineer.name).toBe('stef')
    expect(engineer.id).toBe(6)
    expect(engineer.email).toBe('sf@gmail.com')
    expect(engineer.getRole()).toBe('Engineer')
    expect(engineer.getGithub()).toBe('steffgithubusername')

})