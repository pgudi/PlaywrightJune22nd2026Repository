let mypromise=new Promise((resolve, reject)=>{
    let status=true
    if(status){
        resolve("The Operation has completed successfully")
    }else{
        reject("The Operation has failed !!!!")
    }
})

mypromise.then(result =>{
    console.log(result);
    
}).catch(error =>{
    console.log(error);
    
})