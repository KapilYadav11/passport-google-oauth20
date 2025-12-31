const { default: mongoose } = require("mongoose")

const connectDB = async () =>{
    try {
        let res = await mongoose.connect("mongodb://0.0.0.0/google-auth");
        if(res){
            console.log("mongodb connected");
        }
    } catch (error) {
        console.log("error in the mongo" , error)
    }
};

module.exports = connectDB;