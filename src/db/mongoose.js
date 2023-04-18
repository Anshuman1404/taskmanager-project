const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api').then(() => console.log('Connected!'));


/*SHIFTED TO TASK MODEL
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})*/



/* CODE ADDED TO USER.JS TO CREATE MODELS 
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true //required here is used for data validation so if only name is given there is no need to give age value
    },
    email: {
        type: String,
        required: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
 
    },
    age: {
        type: Number,
        validate(value){ // data validation to keep no.s +ve
            if(value<0){
                throw new Error('age must be +ve')

            }
        }
    }
})

const me = new User({
    name: 'aman ',
    email:'anshuman@',
    age: 21

})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})



//now models in mongoose 
/*const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true'
        trim: true
    },
    completed: {
        type: Boolean
        default: false
    }
})

// using constructor function providing object,where data is given 
 const task = new Task({
    description: 'Learn the Mongoose library',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})
-----*/

/*data validation -  data conforms some rules/ we use npm validator for more complex validations 
data standardization - altering data before saving 
*/