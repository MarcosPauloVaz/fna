import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the VotacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-votacao',
  templateUrl: 'votacao.html',
})
export class VotacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Confirmar Voto',
      message: "<p>A opção escolhida foi:</p><img width='50%' src='../../assets/votacao/votacao1.jpg'><p><strong>Presépio Piripipau</strong></p><p>Para confirmar preencha os dados abaixo e confirme!</p>",
      inputs: [
        {
          name: 'nome',
          placeholder: 'Nome'
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Votar!',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotacaoPage');
  }

}
