import { Injectable } from '@angular/core';
import { Pedidos } from '../models/pedido';
import { Productos } from '../models/productos';
import { PedidoDetalle } from '../models/pedido-detalle';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  pedido: Pedidos= new Pedidos()
  
  constructor() { 
   
  }
  
}
