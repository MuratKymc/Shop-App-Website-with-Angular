import {NgModule} from '@angular/core';
import { ModelModule } from '../model/model.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
    imports: [ModelModule, BrowserModule,FormsModule],
    declarations: [ShopComponent, NavbarComponent],
    exports: [ShopComponent]
     
})
export class ShopModule{}