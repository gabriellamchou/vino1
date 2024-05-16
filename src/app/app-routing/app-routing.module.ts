import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UvaComponent } from '../uva/uva.component';
import { VinoComponent } from '../vino/vino.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/vinos', pathMatch: 'full' },
  { path: 'vinos', component: VinoComponent },
  { path: 'uvas', component: UvaComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
