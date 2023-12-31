import { Controller, Get } from "@nestjs/common";
import { PaymentsService } from "./payments.service";

@Controller('/payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  showPayment() {
    return this.paymentsService.paymentStatus()
  }
}
