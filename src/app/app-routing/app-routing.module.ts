import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinosListComponent } from '../vino/vinos-list/vinos-list.component';
import { UvaComponent } from '../uva/uva.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/vinos', pathMatch: 'full' },
  { path: 'vinos', component: VinosListComponent },
  { path: 'uvas', component: UvaComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
