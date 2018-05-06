import { Component } from '@angular/core';
import { NavController, IonicPage, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ToastService } from './../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	selectedFile: File;

  constructor(
  	public navCtrl: NavController,
    private rest: RestProvider,
    private toast: ToastService,
    private loadingCtrl: LoadingController
  ) {
  	  
  }

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    let loading = this.loadingCtrl.create({content:'Please wait, procesing....'});    
    loading.present();

    this.rest.addFile(this.selectedFile).then(ref =>{
      loading.dismiss();
      this.toast.show(`${this.selectedFile.name} uploaded!`);
    });
  }
}
