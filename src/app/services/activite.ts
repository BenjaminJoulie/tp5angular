import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  objectifs: string[] = [];

  constructor() { }

  removeItem(index: number) {
    this.objectifs.splice(index, 1);
  }

  modifItem(index: number, nouveauTitre: string) {
    this.objectifs[index] = nouveauTitre;
  }

}
