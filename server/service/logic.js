const db=require('./db')

const allEmployee=()=>{
  return db.Employee.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data is available"
            }
        }
    })
}
const addEmployee=(id,uname,age,role,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:404,
                message:"already present"
            }
        }
        else{
            // create object of employee model for new employee
            const newEmp=new db.Employee({
                id,
                uname,
                age,
                role,
                salary
            })
            newEmp.save()
            // save the object in db

            return{
                statusCode:200,
                message:"added successfully"
            }
        }
    })
}

const removeEmployee=(eid)=>{
  return  db.Employee.deleteOne({id:eid}).then(result=>{
        if(result){
            return{
                statusCode:200,
                message:"removed"
            }
           
            
        }
        else{
            return{
                statusCode:404,
                message:"not present"
            }
            
        }
    })
}
const getAnEmp=(id)=>{
   return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }

        }
        else{
            return{
                statusCode:404,
                message:"not present"
            }
        }
    })
}
const editEmp=(id,uname,age,role,salary)=>{
   return db.Employee.findOne({id}).then(result=>{
        if(result){
            result.id=id
            result.uname=uname
            result.age=age
            result.role=role
            result.salary=salary

            result.save()

            return{
                statusCode:200,
                message:'data updated'
            }

        }
        else{
            return{
                statusCode:404,
                message:"not present"


            }
        }
    })
}
module.exports={
    allEmployee,addEmployee,removeEmployee,getAnEmp,editEmp 
}





