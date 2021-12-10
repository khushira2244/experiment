require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60f8e61cc9a57a180cf33f43')
//   .then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
//   })
//   .then((results) => {
//     console.log(results)
//   })
//   .catch((e) => console.log(e))
const deleteTaskAndCount = async (id) => {
  const delet = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({ completed: false })
  return count
}
deleteTaskAndCount('60f8e731eb7354260cfaffab')
  .then((count) => console.log(count))
  .catch((e) => {
    console.log(e)
  })
