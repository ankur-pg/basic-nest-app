import { Injectable } from "@nestjs/common";

@Injectable()
export class PaymentsService {
  paymentStatus(): boolean {
    return true
  }
}
