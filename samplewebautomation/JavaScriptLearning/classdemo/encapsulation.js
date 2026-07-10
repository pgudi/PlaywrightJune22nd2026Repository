class Bank{
    #bankName
    #accountNumber;
    #balacne;

    setBankName(bankName){
        this.#bankName=bankName
    }

    setAccountNumber(accountNumber){
        this.#accountNumber=accountNumber
    }

    setBalance(balance){
        this.#balacne=balance
    }

    getBankName(){
        return this.#bankName
    }

    getAccountNumber(){
        return this.#accountNumber
    }

    getBalance(){
        return this.#balacne
    }
}

let hdfc=new Bank()
hdfc.setBankName("HDFC Regional Bank")
hdfc.setAccountNumber(10000001)
hdfc.setBalance(45000)

console.log(hdfc.getBankName());
console.log(hdfc.getAccountNumber());
console.log(hdfc.getBalance());

