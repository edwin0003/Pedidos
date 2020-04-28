import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../models/clientes';
import { PedidosService } from '../services/pedidos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clientes: Array<Cliente>=new Array<Cliente>();
  constructor(public clientesServicio: ClientesService, public pedidosServicios: PedidosService, private route: Router) { }

  ngOnInit(): void {
    this.clientes= this.clientesServicio.clientesLocalStorage;
  }
  buscarClientes(nombreaBuscar)
  {
    
    this.clientes=this.clientesServicio.clientesLocalStorage.filter(clientesLS=>{
      return clientesLS.nombre.toLocaleLowerCase().includes(nombreaBuscar.toLocaleLowerCase());
    })

  }
  irAProductos(cliente: Cliente){
  
    this.pedidosServicios.pedido.clienteId= cliente.clienteId
    this.pedidosServicios.pedido.nombreCliente= `${cliente.nombre} ${cliente.apellido}` 
    this.route.navigateByUrl("/productos")

  }
}
