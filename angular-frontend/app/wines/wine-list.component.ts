import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { WineService } from './wine.service';
import { IWine } from './wine';
import { ColumnSplitPipe } from '../pipes/column-split.pipe';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';

@Component({
    selector: 'wine-cellar-wine-list',
    templateUrl: 'templates/wine-list.component.html',
    pipes: [ColumnSplitPipe, EllipsisPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class WineListComponent implements OnInit {
    wines: IWine[];
    
    constructor(private _wineService: WineService) {
    }

    ngOnInit() {
        this._wineService.getWines()
            .subscribe(wines => this.wines = wines);
    }
}