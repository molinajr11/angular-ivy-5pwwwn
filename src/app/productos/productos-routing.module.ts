import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductoComponent } from './pages/producto/producto.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar', component: EditarComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'producto', component: ProductoComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
