var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Account = (function () {
    function Account(number, bankName, routingNumber) {
        this.Number = number;
        this.BankName = bankName;
        this.RoutingNumber = routingNumber;
    }
    Account.prototype.showBankDetails = function () {
        console.log('Bank Details :' + this.BankName + ' ' + this.Number);
    };
    return Account;
}());
// let account = new Account(123, 'BOA', 12);
// account.showBankDetails();
var SavingAccount = (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(number, bankName, routingNumber, type) {
        var _this = _super.call(this, number, bankName, routingNumber) || this;
        _this.type = type;
        return _this;
    }
    SavingAccount.prototype.showAccountType = function () {
        console.log('Account Type is ' + this.type);
    };
    return SavingAccount;
}(Account));
var account = new SavingAccount(123, 'BOA', 12, 'Saving');
account.showBankDetails();
account.showAccountType();
