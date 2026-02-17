class BankAccount{
    constructor(owner){
        this.owner=owner;
        this.balance=0;
        this.Transaction=[];

    }
    Deposit(amount){
        if(amount<=0){
            console.log("Invalid Amount")
            return;
        }
        this.balance+=amount;
        this.Transaction.push(`Deposited $${amount}`)

    }
    Withdraw(amount){
        if(amount>this.balance){
            console.log("Unsufficient Funds")
            return;
        }
        this.balance-=amount;
        this.Transaction.push(`Withdrawn amount $${amount}`)
    }
    Checkbalance()
    {
        console.log(`Current balance ${this.balance}`)
    }
    Viewtransaction()
    {
        console.log("Transactions")
        this.Transaction.forEach((t)=>console.log(t))
    }
}
const account=new BankAccount("vetri")
account.Deposit(1000)
account.Withdraw(300)
account.Checkbalance()
account.Viewtransaction()