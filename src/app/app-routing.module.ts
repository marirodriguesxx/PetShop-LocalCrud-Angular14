import { PetListEditComponent } from './pet-list/pet-list-edit/pet-list-edit.component';
import { PetListComponent } from './pet-list/pet-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/pet-list', pathMatch: 'full' },
  { path: 'pet-list', component: PetListComponent },
  { path: 'pet-edit', component: PetListEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
