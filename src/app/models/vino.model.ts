export class Vino {
    public id: number;
    public nombre: string;
    public precio: number;
    public idRegion: number;
    public idTipoVino: number;
    public idBodega: number;
    public anada: number;
    public alergenos: string;
    public graduacion: number;
    public breveDescripcion: string;
    public imagePath: string;
    public capacidad: number;
    public stock: number | null;

    constructor (
        id: number,
        nombre: string,
        precio: number,
        idReg: number,
        idTipo: number,
        idBod: number,
        anada: number,
        alerg: string,
        grad: number,
        desc: string,
        img: string,
        cap: number,
        stock: number | null
    ) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.idRegion = idReg;
        this.idTipoVino = idTipo;
        this.idBodega = idBod;
        this.anada = anada;
        this.alergenos = alerg;
        this.graduacion = grad;
        this.breveDescripcion = desc;
        this.imagePath = img;
        this.capacidad = cap;
        this.stock = stock;
    }
}