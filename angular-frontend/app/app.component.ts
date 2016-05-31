import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes } from '@angular/router';

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
@Routes([
    { path: '/wines', component: WineListComponent },
    { path: '/wine', component: WineDetailsComponent },
    { path: '/contact', component: ContactComponent }
])
export class AppComponent {
}
