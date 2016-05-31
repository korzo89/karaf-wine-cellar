import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {
    transform(value: string, args: number[]) : any {
        if (!args || args.length == 0 || args[0] === -1)
            return value;

        if (value.length > args[0])
            return value.substring(0, args[0]) + '...';
        else
            return value;
    }
}