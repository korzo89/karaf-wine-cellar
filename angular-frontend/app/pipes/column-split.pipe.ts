
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'columnSplit'
})
export class ColumnSplitPipe implements PipeTransform {
    transform(value: any[], ...args: number[]): any[][] {
        if (!args || args.length == 0)
            throw new Error('ColumnSplitPipe requires one argument');
        if (!value)
            return [];
        
        let result: any[][] = [];
        let numColumns: number = +args[0];
        let currColumn: number = 0;
        let currArray: any[];
        
        for (let item of value) {
            if (currColumn % numColumns == 0) {
                currColumn = 0;
                currArray = [];
                result.push(currArray);
            }
            currColumn++;
            currArray.push(item);
        }
        
        return result;
    }
}