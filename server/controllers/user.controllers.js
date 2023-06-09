import User from "../models/user.js";

export const getUser =  async (req, res) => {     
    try {
        const {email,password} = req.body;
        const user = await User.findOne()
            
        if(email===user.email && parseInt(password) === user.password ) {
            
            console.log("Entraste")
            
            
        }else if(email=== user.email && parseInt(password) !== user.password){
            console.log("Contraseña Incorrecta")
        }else if(email!==user.email && parseInt(password) === user.password ){
            console.log("Correo Incorrecto")
        }else{console.log("CORREO Y/O CONTRASEÑA INCORRECTA")}


    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}