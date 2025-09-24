import { NgModule } from "@angular/core";
import { App } from "./app";
import { Header } from "./header/header";
import { InvestmentResult } from "./investment-result/investment-result";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

@NgModule({
    declarations: [App, Header, InvestmentResult],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [App],
})

export class AppModule {}