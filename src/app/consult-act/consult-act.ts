import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-consult-act',
  styleUrl: './consult-act.scss',
  templateUrl: './consult-act.html',
})
export class ConsultAct {
  param = "valDefault"
  param2 = null
  index: number = 0;
  titre: string = "";
  modeEdition: boolean = false;

  constructor(private actRoute: ActivatedRoute,
              private activiteService: ActiviteService,
              private monRouteur: Router){
    this.param = actRoute.snapshot.params['idAct']
    this.param2 = actRoute.snapshot.params['idSec']

    this.index = Number(this.param);
    this.titre = this.activiteService.objectifs[this.index];
  }

  supprimeElem(index: number) {
    this.activiteService.removeItem(index);
    this.monRouteur.navigate(['']);
  }

  editer() {
    this.modeEdition = true;
  }

  sauvegarder() {
    this.activiteService.modifItem(this.index, this.titre);
    this.modeEdition = false;
  }

}
