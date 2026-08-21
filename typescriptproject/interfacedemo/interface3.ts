interface TaxPayer{
    id:number;
    firstname:string;
    readonly pancard:string
}

let santosh:TaxPayer={
    id:101,
    firstname:"Santosh G",
    pancard:"AKTPJ1234S"
}

console.log(santosh.id)
console.log(santosh.firstname)
console.log(santosh.pancard)

santosh.id=102
console.log(santosh.id)
santosh.firstname="Bhaskar"
console.log(santosh.firstname)
