const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

const User = mongoose.model('User', {
  name: {
    type: String,
  },

  age: {
    type: Number,
  },
})
const me = new User({
  name: 'Khushi',
  age: 27,
})
me.save()
  .then(() => {
    console.log(me)
  })
  .catch((e) => {
    console.log(e)
  })

// const User = mongoose.model('User', {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error('email not valid')
//       }
//     },
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 7,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (value.toLowerCase().includes('password')) {
//         throw new Error('password shouldnt contain "password')
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error('age must be positive number')
//       }
//     },
//   },
// })
// const me = new User({
//   name: '   khushi2',
//   email: 'MyEmail@gmail.com  ',
//   password: ' Phone123 ',
// })
// me.save()
//   .then(() => {
//     console.log(me)
//   })
//   .catch((error) => {
//     console.log('error', error)
//   })
// const Task = mongoose.model('Task', {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
// })
// const task = new Task({
//   description: '   eat the lunch  ',
// })
// task
//   .save()
//   .then(() => {
//     console.log(task)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
