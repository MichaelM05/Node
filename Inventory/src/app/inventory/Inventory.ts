export class Inventory {

    constructor(
        public id: number,
        public product: string,
        public price: number,
        public supplier: string,
        public existence: number
    ){}
}