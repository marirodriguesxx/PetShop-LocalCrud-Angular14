import { Pet } from './pet-model';
import { PetListService } from './pet-list.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];
  private subscription: Subscription;

  constructor(private petService: PetListService) { }

  ngOnInit() {
    this.pets = this.petService.getPets();
    this.subscription = this.petService.petChange
      .subscribe(
        (pets: Pet[]) => {
          this.pets = pets;
        }
      );
  }

  onEditItem(index: number) {
    this.petService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
