import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx'; //Load all features

import {ProductListComponent} from './product/product-list.component';
import {ProductService} from './product/product.service';

// component decorator - function
//{{expression}} Interpolarion one-way binding
@Component({
    selector : 'pm-app',
    template :  `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
    `,
    directives : [ProductListComponent],
    providers: [ProductService, HTTP_PROVIDERS]
})

// this is a class definition this class feeds the temolate
export class AppComponent{
    pageTitle : string = "";
}