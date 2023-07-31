import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RestService } from './rest.service';
import { ProductRepositpry } from './product.repository';
import { CategoryRepositpry } from './category.repository';


@NgModule({
    imports: [HttpClientModule],
    providers: [RestService,ProductRepositpry,CategoryRepositpry]
     
})
export class ModelModule{}