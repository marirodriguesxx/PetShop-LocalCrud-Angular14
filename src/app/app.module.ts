import { PetListService } from './pet-list/pet-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetListEditComponent } from './pet-list/pet-list-edit/pet-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetListComponent,
    PetListEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PetListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
