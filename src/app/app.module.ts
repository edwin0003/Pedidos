import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { ReactiveFormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ProductosComponent,
    PedidosComponent,
    ClientesComponent,
    HomeComponent,
    AgregarClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
