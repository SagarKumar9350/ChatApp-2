import jwt from "jsonwebtoken"

const createTokenAndSaveCookie = (userId,res) =>{
    const token = jwt.sign({userId},process.env.JWT_TOKEN,{
        expiresIn:"10d"
    });
    res.cookie("jwt",token,{
        httpOnly:true, //prevent from xss attack
        secure: true,
        seameSite:"none" //csrf attack
    });
}
export default createTokenAndSaveCookie;