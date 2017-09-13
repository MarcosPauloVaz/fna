import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SobrePage } from '../sobre/sobre';
import { VotacaoPage } from '../votacao/votacao';
import { ProgramacaoPage } from '../programacao/programacao';
import { ExpositoresPage } from '../expositores/expositores';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goSobre(){
  	this.navCtrl.push(SobrePage);
  }

  goVotacao(){
  	this.navCtrl.push(VotacaoPage);
  }

  goProgramacao(){
  	this.navCtrl.push(ProgramacaoPage);
  }

  goExpositores(){
  	this.navCtrl.push(ExpositoresPage);
  }

}
