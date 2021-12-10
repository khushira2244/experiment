require('../src/db/mongoose')
const User = require('../src/models/user')
//60f845060c901e0ab0475939
User.findByIdAndUpdate('60f84755d9fbec2860a68cea', { age: 1 })
  .then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
  })
  .then((result) => {
    console.log(result)
  })
  .catch((e) => {
    console.log(e)
  })

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age })
  const count = await User.countDocuments({ age })
}
updateAgeAndCount('60f83fd70be02a042c1b0379', 2)
  .then((count) => {
    console.log(count)
  })
  .catch((e) => {
    console.log(e)
  })
