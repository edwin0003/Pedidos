import { Component, OnInit } from '@angular/core';
import { strict } from 'assert';
interface Cliente{
  nombre: string;
  apellido:string
  edad: number
}

interface Producto{
  nombre:string
  precio:number
}
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {
  // clientes: Array<Cliente>= new Array<Cliente>();
  // productos: Array<Producto>= new Array<Producto>();
  constructor() { }

  ngOnInit(): void {
    // this.clientes.push({
    //   nombre: 'Julieta',
    //   apellido: 'Suarez',
    //   edad: 34
    // },
    // {
    //   nombre: 'Luis',
    //   apellido: 'calucho',
    //   edad:38
    // },
    // {
    //   nombre: 'carlos',
    //   apellido: 'quintana',
    //   edad: 45
    // }

    // )
      // this.productos.push(
      //   {
      //     nombre: 'gelatina',
      //     precio: 2
      //   },
      //   {
      //     nombre: 'galletas',
      //     precio: 5
      //   },
      //   {
      //     nombre: 'dulces',
      //     precio: 10
      //   }
      // )
 
  }

  guardarCliente(){

    let clientesAgregar: Array<Cliente>= new Array<Cliente>();
    clientesAgregar.push({
        nombre: 'Julieta',
        apellido: 'Suarez',
        edad: 34
      },
      {
        nombre: 'Luis',
        apellido: 'calucho',
        edad:38
      },
      {
        nombre: 'carlos',
        apellido: 'quintana',
        edad: 45
      }
      )
    localStorage.setItem("clientes", JSON.stringify(clientesAgregar))

  }
  guardarProducto(){
    let productosAgregar: Array<Producto>=new Array<Producto>();
    productosAgregar.push(
        {
          nombre: 'gelatina',
          precio: 2
        },
        {
          nombre: 'galletas',
          precio: 5
        },
        {
          nombre: 'dulces',
          precio: 10
        }
      )
    localStorage.setItem("productos", JSON.stringify(productosAgregar))

  }
  // leer(){
  //   this.clientes= JSON.parse( localStorage.getItem("clientes"))
  //   this.productos= JSON.parse(localStorage.getItem("productos"))
  // }
  eliminarClientes(){
    localStorage.removeItem("clientes");
  }

  eliminarProductos(){
    localStorage.removeItem("productos")
  }
  eliminarTodo(){
    localStorage.clear();
  }

  get clientesLocales(): Cliente[]{
    let clientesLocalStorage: Cliente[]= JSON.parse(localStorage.getItem("clientes"))
    if (clientesLocalStorage== null) {
      return new Array<Cliente>()
    } 
    return clientesLocalStorage;
  }
  get productosLocales(): Producto[]{
    let productosLocalStorage: Producto[]= JSON.parse(localStorage.getItem("productos"))
    if (productosLocalStorage== null) {
      return new Array<Producto>()
      
    }
    return productosLocalStorage;
  }

}
