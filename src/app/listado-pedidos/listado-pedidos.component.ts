import { Pedidos } from './../models/pedido';
import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../services/pedidos.service';
import { PedidoDetalle } from '../models/pedido-detalle';
import { Productos } from '../models/productos';

@Component({
  selector: 'app-listado-pedidos',
  templateUrl: './listado-pedidos.component.html',
  styleUrls: ['./listado-pedidos.component.scss']
})
export class ListadoPedidosComponent implements OnInit {

  listadoPedidos: Pedidos[]= new Array<Pedidos>();
  productos:Productos[]= new Array<Productos>();
  constructor(public pedidoServicio: PedidosService) { }

  ngOnInit(): void {
    this.listadoPedidos= this.pedidoServicio.listadoPedidosLocalStorage;
  }

}
