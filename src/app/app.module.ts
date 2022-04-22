import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { ProductsComponent } from './Components/products/products.component';
import { FormsModule } from '@angular/forms';
import { IdnumPipe } from './Pipe/idnum.pipe';
import { CreditCardPipe } from './Pipe/credit-card.pipe';
import { ShadowDirective } from './Directive/shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    ProductsComponent,
    IdnumPipe,
    CreditCardPipe,
    ShadowDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
