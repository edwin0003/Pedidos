import { Injectable } from "@angular/core";
import { Pedidos } from "../models/pedido";
@Injectable({
  providedIn: "root",
})
export class PedidosService {
  pedido: Pedidos = new Pedidos();

  constructor() {
    this.pedido = this.ultimoPedido;
  }

  guardarLocalStorage() {
    localStorage.setItem("ultimoPedido", JSON.stringify(this.pedido));
  }

  get ultimoPedido(): Pedidos {
    let pedidoLocalStorage: Pedidos = new Pedidos(JSON.parse(localStorage.getItem("ultimoPedido")));

    if (pedidoLocalStorage == null) {
      return new Pedidos();
    } else {
      return pedidoLocalStorage;
    }
  }
  guardarPedido(){
    let listadoPedidos: Pedidos[]=new Array<Pedidos>();
    listadoPedidos= this.listadoPedidosLocalStorage;
    this.pedido.pedidoId= listadoPedidos.length +1;
    listadoPedidos.push(this.pedido);
    localStorage.setItem("pedidos", JSON.stringify(listadoPedidos));
    localStorage.removeItem("ultimoPedido");
    this.pedido= new Pedidos(null);
  }

  get listadoPedidosLocalStorage():Pedidos[]
  {
    let pedidos: Pedidos[]= JSON.parse(localStorage.getItem("pedidos"));
    if (pedidos == null) {
      return new Array<Pedidos>();
    }
    return pedidos.sort((a,b)=>b.pedidoId - a.pedidoId)
  }
}
