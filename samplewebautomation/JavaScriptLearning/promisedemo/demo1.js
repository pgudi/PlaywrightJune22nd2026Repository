let promiseobject=new Promise(function(resolved, rejected){
    let status=false
    if(status){
        resolved("The Action has performed succesfully")
    }else{
        rejected("The Action has failed !!!")
    }
})

promiseobject.then(result =>{
    console.log(result);
}).catch(error =>{
    console.log(error);
}).finally(always =>{
    console.log("This Action executes always");   
})

console.log("---------------------------------------------");

let loginpromise = new Promise((resolved, rejected)=>{
    let loginPerformed=true
    if(loginPerformed){
        resolved("The Home Page has displayed usccesfully");
    }else{
        rejected("Invalid Credentials supplied on Login Form!!!")
    }
})

loginpromise
.then(result=>{
    console.log(result);
    
}).catch(error =>{
    console.log(error);
    
}).finally(always =>{
    console.log("This Action executes always");   
})



    
