
class PaymentProcess{
    payment(){
        console.log("Payment through Cash Payment Process!!")
    }
}

class PhonePe extends PaymentProcess{
    payment(){
        console.log("Payment through PhonePe Payment Process!!")
    }
}

class GooglePay extends PaymentProcess{
    payment(){
        console.log("Payment through Google Pay Payment Process!!")
    }
}

class NetBanking extends PaymentProcess{
    payment(){
        console.log("Payment through Net Banking Payment Process!!")
    }
}

let pay=new PaymentProcess()

let phonepe=new PhonePe()
let googlepay=new GooglePay()
let netbanking=new NetBanking()

pay=phonepe;
pay.payment()

pay=googlepay
pay.payment()

pay=netbanking
pay.payment()