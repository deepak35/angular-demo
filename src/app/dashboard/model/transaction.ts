export class Transaction {
    public sender: any;
    public reciever: any;
    public amount: number;
    public sign: any;

    constructor(sender: any, reciever: any, amount: any){
        this.sender = sender;
        this.reciever = reciever;
        this.amount = amount;
    }
}
