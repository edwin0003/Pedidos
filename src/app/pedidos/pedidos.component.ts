import { Component, OnInit } from "@angular/core";
import { Pedidos } from "../models/pedido";
import { PedidosService } from '../services/pedidos.service';
import { Productos } from '../models/productos';
import { PedidoDetalle } from '../models/pedido-detalle';

@Component({
  selector: "app-pedidos",
  templateUrl: "./pedidos.component.html",
  styleUrls: ["./pedidos.component.scss"],
})
export class PedidosComponent implements OnInit {
  constructor(public pedidoServicio: PedidosService) {}
  ngOnInit(): void {

    
    // let pedido: Pedidos = new Pedidos();
    // pedido.pedidoId = 1;
    // pedido.clienteId = 1;
    // pedido.nombreCliente = "juan";
    // pedido.total = 40;
    // pedido.pedidoDetalle.push(
    //   {
    //     productoId: 1,
    //     nombreProducto: "Maiz",
    //     cantidad: 10,
    //     precio: 30,
    //     total: 50,
    //   },
    //   {
    //     productoId: 2,
    //     nombreProducto: "queso",
    //     cantidad: 5,
    //     precio: 30,
    //     total: 60,
    //   }
    // );
    // console.log(pedido);
  }
}
