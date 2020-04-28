import { Component, OnInit } from "@angular/core";
import { ProductosService } from "../services/productos.service";
import { Productos } from "../models/productos";
import { PedidosService } from "../services/pedidos.service";

@Component({
  selector: "app-productos",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.scss"],
})
export class ProductosComponent implements OnInit {
  productos: Array<Productos> = new Array<Productos>();
  constructor(
    public productosServicio: ProductosService,
    public pedidosServicio: PedidosService
  ) {}

  ngOnInit(): void {
    this.productos = this.productosServicio.productosLocalStorage;
  }
  buscarProductos(buscarProducto) {
    this.productos = this.productosServicio.productosLocalStorage.filter(
      (productosLS) => {
        return productosLS.nombre
          .toLocaleLowerCase()
          .includes(buscarProducto.toLocaleLowerCase());
      }
    );
  }
  irAProductos(){

  }
  agregar(producto:Productos){

    this.pedidosServicio.pedido.agregarProducto(producto)
    console.log(this.pedidosServicio.pedido)

  }
}
