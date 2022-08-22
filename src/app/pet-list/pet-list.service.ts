import { Pet } from './pet-model';
import { Subject } from 'rxjs';

export class PetListService {

  petChange = new Subject<Pet[]>();
  startedEditing = new Subject<number>();
  
  private pets: Pet[] = [
    new Pet('Qiyana','Mariana','Pinscher', 1.4),
    new Pet('Diana','Leo','SRD', 0.9),
    new Pet('Tifani','Pedro','Cocker', 15),
    new Pet('Prey','Alexandre','Pinscher', 6)
  ];

  getPets() {
    return this.pets.slice();
  }

  getPet(index: number) {
    return this.pets[index];
  }

  addPet(pet: Pet) {
    this.pets.push(pet);
    this.petChange.next(this.pets.slice());
  }

  addPets(pets: Pet[]) {
    this.pets.push(...pets);
    this.petChange.next(this.pets.slice());
  }

  updatePet(index: number, newPet: Pet) {
    this.pets[index] = newPet;
    this.petChange.next(this.pets.slice());
  }

  deletePet(index: number) {
    this.pets.splice(index, 1);
    this.petChange.next(this.pets.slice());
  }
}
