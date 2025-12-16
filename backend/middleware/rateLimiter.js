import ratelimit from "../config/upstash.js"

const rateLimiter = async (req,res,next)=>{
try{
    const {success} = await ratelimit.limit("my-limiy-key")
 if(!success){
    return res.status(429).json({message:"Too many bad requests, server unable to handle"})
 }
 next()
} catch(error){
    console.error("code-429 , Rate limit Error");
}
};

export default rateLimiter;