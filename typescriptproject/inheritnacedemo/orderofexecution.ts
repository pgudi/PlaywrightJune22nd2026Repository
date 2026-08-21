class AA{
    constructor(){
        console.log("It is AA class Constructor")
    }
}

class BB extends AA{
    constructor(){
        super()
        console.log("It is BB class Constructor")
    }
}

class CC extends BB{
    constructor(){
        super()
        console.log("It is CC class Constructor")
    }
}

let obj=new CC()