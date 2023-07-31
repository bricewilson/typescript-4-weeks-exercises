import { PaymentReceiverBase } from "./PaymentReceiverBase";

export class Vendor extends PaymentReceiverBase {

  ReceivePayment(): void {
    console.log('Receiving payment...');
  }

}