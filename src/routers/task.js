const express = require('express')
//make the sample of express
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body)
  try {
    await task.save()
    res.status(201).send(task) // created status 201
  } catch (e) {
    res.status(400).send(e) //invalid request message
  }
  // task
  //   .save()
  //   .then(() => {
  //     res.status(201).send(task)
  //   })
  //   .catch((e) => {
  //     res.status(400).send(e)
  //   })
})
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.send(tasks)
  } catch (e) {
    res.status(500).send() // server dont find any tasks in the database
  }
  // Task.find({})
  //   .then((tasks) => {
  //     res.send(tasks)
  //   })
  //   .catch((e) => {
  //     res.status(500).send()
  //   })
})
router.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id //params after query after /
  try {
    const task = await Task.findById(_id)
    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
  // Task.findById(_id)
  //   .then((task) => {
  //     if (!task) {
  //       return res.status(404).send()
  //     }
  //     res.send(task)
  //   })
  //   .catch((e) => {
  //     res.status(500).send()
  //   })
})
router.patch('/users/:id', async (req, res) => {
  // updating the resource
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOpperation = updates.every((update) => {
    // only callback function
    return allowedUpdates.includes(update)
  })
  if (!isValidOpperation) {
    return res.status(400).send({ error: 'invalid operations' })
  }
  try {
    const task = await Task.findById(req.params.id)
    //indvidual update
    updates.forEach((update) => (task[update] = req.body[update]))
    await task.save()

    //mongoose method we are going to use ...not setting it will be done by mongoose
    // const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // })
    if (!user) {
      return res.status(404).send()
    }

    res.send(user)
  } catch (e) {
    // validation error + 505 error
    res.status(400).send(e)
  }
})
router.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body) // array of property
  const allowedUpdates = ['description', 'completed']
  const isValidOpperation = updates.every((update) => {
    // only callback function
    return allowedUpdates.includes(update)
  })
  if (!isValidOpperation) {
    return res.status(400).send({ error: 'invalid operations' })
  }
  try {
    //mongoose method we are going to use ...not setting it will be done by mongoose
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      // id to update,update to apply
      new: true,
      runValidators: true,
    })
    if (!task) {
      return res.status(404).send()
    }

    res.send(task)
  } catch (e) {
    // validation error + 505 error
    res.status(400).send(e)
  }
})
//express end points for delete
router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if (!task) {
      return res.status(404).send()
    }
    res.send(task)
  } catch (e) {
    res.status(500).send()
  }
})

module.exports = router
