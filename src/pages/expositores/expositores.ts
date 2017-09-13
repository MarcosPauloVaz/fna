import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetalheExpositorPage } from '../detalhe-expositor/detalhe-expositor';

/**
 * Generated class for the ExpositoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expositores',
  templateUrl: 'expositores.html',
})
export class ExpositoresPage {

  searchQuery: string = '';
  items= new Array<any>();
  //itemsJson = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
                  {"nome":"Ana Carolina","segmento":"Artes Plásticas","avatar":"expositor1.jpg"},
                  {"nome":"José Alves","segmento":"Calçados","avatar":"expositor2.jpg"},
                  {"nome":"Patrícia Andrade","segmento":"Esculturas","avatar":"expositor3.jpg"}
                 ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item: any) => {
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.segmento.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  selecionarExpositor(){
    this.navCtrl.push(DetalheExpositorPage);
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad ExpositoresPage');
  }

}
