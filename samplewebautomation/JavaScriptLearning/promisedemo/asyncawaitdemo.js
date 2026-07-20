let executeAPI=async function (){
    const resposne=await fetch("https://fakestoreapi.com/products/1")
    const data=await resposne.json()
    console.log(data);

}

executeAPI()