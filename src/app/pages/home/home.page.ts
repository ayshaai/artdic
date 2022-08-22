import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataAccess } from 'src/services/data-access.service';
import { DetailsPage } from '../details/details.page';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private dinosaurs: Array<any> = [];

  constructor(public navCtrl: NavController,
    private dataAccess: DataAccess
  ) {
    this.dinosaurs = this.dataAccess
      .getDinosaurs();
  }

  goToDetails(dino){
    this.navCtrl.push( DetailsPage, {
      selectedDino: dino
    });
  }

}
