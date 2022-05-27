const mongoose = require('mongoose');


const dbConecction= async()=>{
    try{
        await mongoose.connect(process.env.DB_CNN,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
            //useCreateIndex: true
        });
        console.log("Base de Datos Conectada");
    }catch(error){
        console.log(error);
        throw new Error("Error a la hora de iniciar la BD");
    }
    
}

module.exports = {
    dbConecction
}