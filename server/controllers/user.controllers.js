import User from "../models/user.js";

export const getUser =  async (req, res) => {     
    try {
        const {email,password} = req.body;
        const user = await User.findOne()
            
        if(email===user.email && parseInt(password) === user.password ) {

            return res.send("Concedido");

        }else if(email=== user.email || parseInt(password) !== user.password){

            return "Malo"

        }else{return"Malo"}


    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}