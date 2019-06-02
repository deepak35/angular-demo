export class Transaction {
    public timestamp: any;
    public sender: any;
    public reciever: any;
    public amount: number;
    public sign: any;

    constructor(timestamp: Date, sender: any, reciever: any, amount: any){
        this.timestamp = timestamp.getTime();
        this.sender = sender;
        this.reciever = reciever;
        this.amount = amount;
    }
}
