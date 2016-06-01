import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { WineService } from '../../services/wine.service';
import { IWine } from '../../services/wine';
import { ColumnSplitPipe } from '../../pipes/column-split.pipe';
import { EllipsisPipe } from '../../pipes/ellipsis.pipe';

@Component({
    selector: 'wine-cellar-wine-list',
    templateUrl: 'app/components/wines/wine-list.component.html',
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