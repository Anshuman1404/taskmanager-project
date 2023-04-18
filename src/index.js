const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT || 3000


app.use((req, res, next) => { //to use middlew are
    res.status(503).send('Site is currently down. Check back soon!')
})
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
/* sent to routers


const app = express()
const port = process.env.PORT || 3000

//configuring express to automatically parse the incomming 
//JSON for us,so we have it accessible as an object which can 
//be accessed in our request handler

app.use(express.json())

app.post('/users', async (req, res) => {
    const user = new User(req.body)
try{
     await user.save()
        res.status(201).send(user)
    } catch(e) {
        res.status(400).send(e)//.status used to get error status
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})
//id of particulaar user changes as make diff request to access the 
//route handlers so we can fetch the user correctly for that we have route parameters
//
app.get('/users/:id',async (req, res) => {  
  const _id= req.params.id 
    
  try {
    const user = await User.findById(_id)

    if (!user) {
        return res.status(404).send()
    }

    res.send(user)
} catch (e) {
    res.status(500).send()
}
})


app.patch('/users/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))//to check whether the input given does have a category for change  

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
  
      if (!user) {
          return res.status(404).send()
      }

      res.send(user)
  } catch (e) {
      res.status(400).send(e)
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
      const user = await User.findByIdAndDelete(req.params.id)

      if (!user) {
          return res.status(404).send()
      }

      res.send(user)
  } catch (e) {
      res.status(500).send()
  }
})



//--task--
app.post('/tasks', async(req, res) => {
    const task = new Task(req.body)
    try {
      await task.save()
      res.status(201).send(task)
  } catch (e) {
      res.status(400).send(e)
  }
})


app.get('/tasks',async(req, res) => {
  try {
    const tasks = await Task.find({})
    res.send(tasks)
} catch (e) {
    res.status(500).send()
}
})

app.get('/tasks/:id',async (req, res) => {
  const _id = req.params.id

 
  try {
    const task = await Task.findById(_id)

    if (!task) {
        return res.status(404).send()
    }

    res.send(task)
} catch (e) {
    res.status(500).send()
}
})

app.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['description', 'completed']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})

      if (!task) {
          return res.status(404).send()
      }

      res.send(task)
  } catch (e) {
      res.status(400).send(e)
  }
})

app.delete('/tasks/:id', async (req, res) => {
  try {
      const task = await Task.findByIdAndDelete(req.params.id)

      if (!task) {
          res.status(404).send()
      }

      res.send(task)
  } catch (e) {
      res.status(500).send()
  }
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
*/


/*----Here we start hashing for hiding the passwords (hashing algorithms do not go back to actual value as it is one way algo*/
//so at the time of login it actually compares the hash code to hash of password stored in database

//const bcrypt = require('bcryptjs')
  
/*const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('red12345!', hashedPassword)
    console.log(isMatch)
}*/


const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()       