import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheExpositorPage } from './detalhe-expositor';

@NgModule({
  declarations: [
    DetalheExpositorPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheExpositorPage),
  ],
})
export class DetalheExpositorPageModule {}
