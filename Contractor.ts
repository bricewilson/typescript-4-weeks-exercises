import { PaymentReceiver } from "./PaymentReceiver";

export class Contractor implements PaymentReceiver {

  ID: number = 0;

  ReceivePayment(): void {
    console.log('Receiving payment...');
  }

}