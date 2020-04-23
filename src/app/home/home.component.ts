import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clientes: Array<Cliente>=new Array<Cliente>();
  constructor(public clientesServicio: ClientesService) { }

  ngOnInit(): void {
    this.clientes= this.clientesServicio.clientesLocalStorage;
  }
  buscarClientes(nombreaBuscar)
  {
    
    this.clientes=this.clientesServicio.clientesLocalStorage.filter(clientesLS=>{
      return clientesLS.nombre.toLocaleLowerCase().includes(nombreaBuscar.toLocaleLowerCase());
    })

  }

}
