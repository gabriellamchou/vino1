export class Vino {
    constructor(
        public id: number,
        public nombre: string,
        public precio: number,
        public idRegion: number,
        public idTipoVino: number,
        public idBodega: number,
        public anada: number,
        public alergenos: string,
        public graduacion: number,
        public breveDescripcion: string,
        public imagePath: string,
        public capacidad: number,
        public stock: number | null
    ) { }
}