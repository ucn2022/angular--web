import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { GlanceComponent } from './pages/glance/glance.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'at-a-glance', component: GlanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
