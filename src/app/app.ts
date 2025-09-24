import { Component } from '@angular/core';
import { Header } from "./header/header";
import { UserInput } from "./user-input/user-input";
import { InvestmentResult } from "./investment-result/investment-result";

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, InvestmentResult],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
