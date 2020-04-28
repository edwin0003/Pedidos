import { PedidoDetalle } from "./pedido-detalle";
import { ArrayType } from "@angular/compiler";
import { Productos } from "./productos";

export class Pedidos {
  pedidoId: number;
  clienteId: number;
  nombreCliente: string;
  total: number;
  pedidoDetalle: Array<PedidoDetalle>;

  constructor() {
    this.pedidoId = this.pedidoId;
    this.clienteId = this.clienteId;
    this.nombreCliente = this.nombreCliente;
    this.total = this.total;
    this.pedidoDetalle = new Array<PedidoDetalle>();
  }

  agregarProducto(producto: Productos) {
    let pedidosDetalle: PedidoDetalle = new PedidoDetalle();
    pedidosDetalle.cantidad = 1;
    pedidosDetalle.nombreProducto = producto.nombre;
    pedidosDetalle.precio = producto.precio;
    pedidosDetalle.productoId = producto.productoId;
    pedidosDetalle.total = pedidosDetalle.cantidad * pedidosDetalle.precio;
    debugger;
    let existe: number = this.pedidoDetalle.filter(
      (x) => x.productoId == producto.productoId
    ).length;
    if (existe > 0) {
      let posicion: number = this.pedidoDetalle.findIndex(
        (x) => x.productoId == producto.productoId
      );
      this.pedidoDetalle[posicion].cantidad++;
      this.pedidoDetalle[posicion].total =this.pedidoDetalle[posicion].cantidad * this.pedidoDetalle[posicion].precio;
    } else {
      this.pedidoDetalle.push(pedidosDetalle);
    }
    this.actualizarTotal();
  }
  private actualizarTotal(){
      this.total=0;
      for (const producto of this.pedidoDetalle) {
          this.total= this.total + producto.total;
      }
  }
}
