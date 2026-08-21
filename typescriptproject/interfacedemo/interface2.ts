interface Customer{
    custid:number;
    custname:string;
    location?:string
}

let adams:Customer={
    custid:101,
    custname:"Adams Ford",
}

let jones:Customer={
    custid:102,
    custname:"Jones Robert",
    location:"Dallas"
}

console.log(adams.custid)
console.log(adams.custname)

console.log(jones.custid)
console.log(jones.custname)
console.log(jones.location)