const Manager = require('../lib/Manager.js');

test('check management role', () => {
    const manager = new Manager('Chatelaine', 3, 'c@gmail.com')
    expect(manager.name).toBe('Chatelaine')
    expect(manager.id).toBe(3)
    expect(manager.email).toBe('c@gmail.com')
    expect(manager.getRole()).toBe('Manager')

})