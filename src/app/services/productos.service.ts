import { Productos } from './../models/productos';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProductosService {
  constructor() {}
  agregarLocalStorage(producto: Productos) {
    let productosAntiguos: Productos[] = this.productosLocalStorage;

    producto.productoId = productosAntiguos.length + 1;

    productosAntiguos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productosAntiguos));
  }

  get productosLocalStorage(): Productos[] {
    let productossDesdeLocalStorage: Productos[] = JSON.parse(
      localStorage.getItem("productos")
    );
    if (productossDesdeLocalStorage == null) {
      return new Array<Productos>();
    }
    return productossDesdeLocalStorage;
  }
}
