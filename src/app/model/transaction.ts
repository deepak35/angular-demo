import {SHA256} from 'crypto-js';
import {ec} from 'elliptic';

export class Transaction {
    public timestamp: any;
    public sender: any;
    public reciever: any;
    public amount: number;
    public signature: any;
    public validTransaction: boolean;

    constructor(timestamp: Date, sender: any, reciever: any, amount: any){
        this.timestamp = timestamp.getTime();
        this.sender = sender;
        this.reciever = reciever;
        this.amount = amount;
    }

    calculateHash() {
        return SHA256(this.timestamp + this.sender + this.reciever + this.amount.toString()).toString();
    }

    signTransaction(privateKey) {
        const transactionHash = this.calculateHash();
        const sign = privateKey.sign(transactionHash, 'base64');
        this.signature = sign.toDER('hex');
    }

    verifySignature(publicKey) {
        const isValidTransaction: boolean = publicKey.verify(this.calculateHash(), this.signature);
        this.validTransaction = isValidTransaction;
        return isValidTransaction;
    }
}
