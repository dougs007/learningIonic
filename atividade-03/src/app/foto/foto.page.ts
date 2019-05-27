import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.page.html',
  styleUrls: ['./foto.page.scss'],
})

export class FotoPage implements OnInit {

  produto = { nome: '', foto: {} }
  id

  constructor(
    private camera: Camera,
    private route: Router,
  ) { }

  ngOnInit() {

  }

  tirarFoto() {

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.produto.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    });

  }

}

