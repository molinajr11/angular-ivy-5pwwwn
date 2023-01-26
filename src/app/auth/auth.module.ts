import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './pages/registro.component';
import { ForgotComponent } from './pages/forgot.component';
import { LoginComponent } from './pages/login.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [RegistroComponent, LoginComponent, ForgotComponent],
})
export class AuthModule {}
