interface Departmant{
    deptno:number
    dname:string;
    loc:string;
    displayAddress(address:string):void
    showCountryName(countryname:string):void
}

class SalesDepartment implements Departmant{
    deptno:number
    dname:string;
    loc:string;
    constructor(deptno:number,dname:string,loc:string){
        this.deptno=deptno
        this.dname=dname
        this.loc=loc
        console.log(this.deptno)
        console.log(this.dname)
        console.log(this.loc)
    }

    displayAddress(address:string):void{
        console.log("Address of the Department :"+address)
    }

    showCountryName(countryname:string):void{
        console.log("Country Name of the Department :"+countryname)
    }
}

let o=new SalesDepartment(10,"Sales","Boston")
o.displayAddress("4th stage, Service Road Boston")
o.showCountryName("United States")