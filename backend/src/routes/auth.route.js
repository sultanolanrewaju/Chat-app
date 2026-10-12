import express from "express"

const router = express.Router()


router.get("/signup",(req,res)=>{
    res.status(200).json({message:"Welcome to SignUp Page!!!"})
})


router.get("/login",(req,res)=>{
    res.status(200).json({message:"Welcome to Login Page!!!"})
})

router.get("/logout",(req,res)=>{
    res.status(200).json({message:"Welcome to LogOut Page!!!"})
})


export default router