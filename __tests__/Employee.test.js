const Employee = require('../lib/Employee.js');

test('test employee', () => {
    const employee = new Employee('michael', 34, 'info@palumbomichael.com')
    
    // check against name
    const name = employee.getName()
    expect(name).toBe('michael')

    // check against ID
    const id = employee.getId()
    expect(id).toBe(34)

    // check email
    const email = employee.getEmail()
    expect(email).toBe('info@palumbomichael.com')
    
    // check against role
    const role = employee.getRole()
    expect(role).toBe('Employee')


})

