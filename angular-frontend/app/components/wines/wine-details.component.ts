import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';

import { IWine, Wine } from '../../services/wine';
import { WineService } from '../../services/wine.service';

@Component({
    selector: 'wine-cellar-wine-details',
    templateUrl: 'app/components/wines/wine-details.component.html'
})
export class WineDetailsComponent implements OnInit {
    wine: IWine;
    editedWine: IWine;
    isEditing: boolean = false;
    
    constructor(private _wineService: WineService,
        private _routeSegment: RouteSegment) {
    }

    ngOnInit() { 
        if (!this.wine) {
            let id = +this._routeSegment.getParam('id');
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