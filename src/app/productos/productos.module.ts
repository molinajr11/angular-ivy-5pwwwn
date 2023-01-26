import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosRoutingModule } from './productos-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';

@NgModule({
  imports: [CommonModule, ProductosRoutingModule],
  declarations: [
    AgregarComponent,
    EditarComponent,
    ListadoComponent,
    ProductoComponent,
  ],
})
export class ProductosModule {}
