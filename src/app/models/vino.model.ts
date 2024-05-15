import { Uva } from "./uva.model";

export class Vino {
    constructor(
        public id: number,
        public nombre: string,
        public breveDescripcion: string,
        public imagePath: string,
        public listaUvas: Uva[]
    ) { }
}