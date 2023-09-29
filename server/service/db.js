const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/ems')


// model
const Employee=mongoose.model('Employee',{
    id:String,
    uname:String,
    age:Number,
    role:String,
    salary:Number
})
module.exports={
    Employee
}


