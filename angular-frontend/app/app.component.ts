import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';
import 'rxjs/Rx';

import { WineService } from './wines/wine.service';
import { WineListComponent } from './wines/wine-list.component';
import { WineDetailsComponent } from './wines/wine-details.component';
import { ContactComponent } from './contact.component';

@Component({
    selector: 'wine-cellar-app',
    templateUrl: 'templates/app.component.html',
    directives: [ROUTER_DIRECTIVES, WineListComponent],
    providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, WineService]
})
@RouteConfig([
    { path: '/wines', name: 'Wines', component: WineListComponent, useAsDefault: true },
    { path: '/wine/:id', name: 'Wine', component: WineDetailsComponent },
    { path: '/contact', name: 'Contact', component: ContactComponent }
])
export class AppComponent {
}