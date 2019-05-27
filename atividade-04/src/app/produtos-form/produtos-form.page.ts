import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from '../Models/Produto';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.page.html',
  styleUrls: ['./produtos-form.page.scss'],
})
export class ProdutosFormPage implements OnInit {

  public titulo = 'Cadastro de Produtos'
  private id
  public produto: Produtos = new Produtos()

  constructor(
    private barcodeScanner: BarcodeScanner,
    private camera: Camera,
    private produtoService: ProdutoService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get('id')

    if (this.id) {
      this.produtoService.find(this.id).subscribe((data: any) => {
        this.produto = data
      })
    }

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

  LercodigoBarra() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.produto.codigoBarra = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  save() {
    this.produtoService.save(this.produto, this.id);
    this.route.navigateByUrl('/produtos');
  }

  delete() {
    this.produtoService.delete(this.id);
    this.route.navigateByUrl('/produtos');
  }

  back() {
    this.route.navigateByUrl('/produtos');
  }
}
