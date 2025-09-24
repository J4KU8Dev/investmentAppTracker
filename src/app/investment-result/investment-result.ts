import { Component, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  standalone: false,
  templateUrl: './investment-result.html',
  styleUrl: './investment-result.css'
})
export class InvestmentResult {
  private investmentService = inject(InvestmentService);

  get results() {
    return this.investmentService.resultData;
  }
}
