import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../models/clientes';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss']
})
export class AgregarClientesComponent implements OnInit {
  clientes: Cliente= new Cliente();
  formularioAgregar: FormGroup
  constructor(private fb: FormBuilder, public clientesServicio:ClientesService) { }

  ngOnInit(): void {
    this.formularioAgregar= this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      direccion: ['', Validators.required]
    })
  }
  agregar(){
    this.clientes= this.formularioAgregar.value as Cliente;
    this.clientesServicio.agregarLocalStorage(this.clientes)
    this.formularioAgregar.reset();
  }

}
