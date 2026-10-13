const User = require('../model/userModel')
const bcrypt = require('bcrypt')
const {createSecretToken} = require('../utils/SecretToken')

 module.exports.Signup = async(req,res,next) => {
    
     try {
    const { email, password, username, createdAt } = req.body
    const existingUser = await User.findOne({email})
    if(existingUser){
      return  res.json({message : "user already exsit"})
    }
    const user =    await User.create({email, password, username, createdAt });
    const token = createSecretToken(user._id);
    res.cookie("token" , token, {
        withCredentials: true,
      httpOnly: false
     
    });
    res.status(201)
    .json({message : "User registresd successfully" , success : true,token :token,  user} );
    next();
}   catch (err) {
  console.error("Signup error:", err);

  return res.status(500).json({
    success: false,
    message: "Signup failed",
    error: err.message
  });

}
 }

 // Login //

module.exports.Login = async (req,res,next) => {
    try{
    const {email,password} = req.body;
    if(!email || !password){
         console.log("succes")
       return res.json({message : "All fields are required"})
    }
    
     const user = await User.findOne({email})
     if(!user){
       return res.json({message: "incorrect password or email"})
     }

     const auth = await  bcrypt.compare(password, user.password)
     if(!auth){
       return res.json({message: "incorrect email or password"})
     }
   
       const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}

module.exports.Logout = (req, res) => {
  res.clearCookie("token", { path: "/" });
  return res.json({ success: true, message: "Logged out successfully" });
};
