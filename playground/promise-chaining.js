require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('640c3263565e92bc08f055ee', { age: 22 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 22 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})