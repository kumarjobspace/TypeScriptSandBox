interface AccountInterface {
    Number: number;
    BankName: string;
    RoutingNumber: number;
    
    showBankDetails();    
}

class Account {
    Number: number;
    BankName: string;
    RoutingNumber: number;

    constructor(number: number, bankName: string, routingNumber: number){
        this.Number = number;
        this.BankName = bankName;
        this.RoutingNumber = routingNumber;
    }

    showBankDetails() {
        console.log('Bank Details :'+  this.BankName + ' ' + this.Number);
    }
}

// let account = new Account(123, 'BOA', 12);
// account.showBankDetails();

class SavingAccount extends Account {
    type: string;
    constructor(number: number, bankName: string, routingNumber: number, type: string){
        super(number, bankName, routingNumber);
        this.type = type;
    }

    showAccountType() {
        console.log('Account Type is ' + this.type);
    }
}

let account = new SavingAccount(123, 'BOA', 12, 'Saving');
account.showBankDetails();
account.showAccountType();

