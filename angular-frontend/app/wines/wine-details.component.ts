import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { IWine, Wine } from './wine';
import { WineService } from './wine.service';

@Component({
    selector: 'wine-cellar-wine-details',
    templateUrl: 'templates/wine-details.component.html'
})
export class WineDetailsComponent implements OnInit {
    wine: IWine;
    editedWine: IWine;
    isEditing: boolean = false;
    
    constructor(private _wineService: WineService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() { 
        if (!this.wine) {
            let id = +this._routeParams.get('id');
            this.getWine(id);
        }
    }
    
    private getWine(id: number) {
        this._wineService.getWine(id)
            .subscribe(wine => this.wine = wine);
    }
    
    toggleEdit() {
        this.isEditing = !this.isEditing;
        if (this.isEditing)
            this.editedWine = new Wine(this.wine);
    }
    
    saveWine() {
        console.log('SAVE');
    }
    
    deleteWine() {
        
    }
}