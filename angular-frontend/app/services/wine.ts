export interface IWine {
    id: number;
    name: string;
    grapes: string;
    country: string;
    region: string;
    year: string;
    description: string;
    imageId: number;
}

export class Wine implements IWine {
    id: number;
    name: string;
    grapes: string;
    country: string;
    region: string;
    year: string;
    description: string;
    imageId: number;
    
    constructor(wine: IWine) {
        this.id = wine.id;
        this.name = wine.name;
        this.grapes = wine.grapes;
        this.country = wine.country;
        this.region = wine.region;
        this.year = wine.year;
        this.description = wine.description;
        this.imageId = wine.imageId;
    }
}