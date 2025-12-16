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

//- next is the Express middleware continuation function.
// - When you call next(), Express moves on to the next middleware or route handler in the chain.
// - If you don’t call next() or return a response, the request will hang.
