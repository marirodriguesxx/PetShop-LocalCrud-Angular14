import { PetListService } from './../pet-list.service';
import { Pet } from './../pet-model';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-list-edit',
  templateUrl: './pet-list-edit.component.html',
  styleUrls: ['./pet-list-edit.component.css']
})
export class PetListEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = true;
  editedPetIndex: number;
  editedPet: Pet;

  constructor(private petService: PetListService) { }

  ngOnInit() {
    this.subscription = this.petService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedPetIndex = index;
          this.editMode = true;
          this.editedPet = this.petService.getPet(index);
          this.slForm.setValue({
            name: this.editedPet.name,
            tutor: this.editedPet.tutor,
            raca: this.editedPet.raca,
            age: this.editedPet.age
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newPet = new Pet(value.name, value.tutor, value.raca, value.age);
    if (this.editMode) {
      this.petService.updatePet(this.editedPetIndex, newPet);
    } else {
      this.petService.addPet(newPet);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.petService.deletePet(this.editedPetIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
