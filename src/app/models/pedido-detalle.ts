import { Productos } from './productos';
export class PedidoDetalle{
    productoId: number
    nombreProducto: string
    cantidad: number
    precio: number
    total: number
    Productos: Array<Productos>;
    constructor(){
        this.productoId=this.productoId
        this.nombreProducto=this.nombreProducto
        this.cantidad= this.cantidad
        this.precio=this.precio
        this.total= this.total
        this.Productos= this.Productos
    }
}