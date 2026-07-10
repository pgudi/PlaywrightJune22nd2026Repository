class AA{
    constructor(){
        console.log("It is a AA class Constructor");
    }
}

class BB extends AA{
    constructor(){
        super()
        console.log("It is a BB class Constructor");
    }
}

class CC extends BB{
    constructor(){
        super()
        console.log("It is a CC class Constructor");
    }
}

let obj=new CC();