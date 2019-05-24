import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private produtoCollection
  public produto

  constructor(
      private http: HttpClient,
      private db: AngularFirestore
  ) {
    this.produtoCollection = this.db.collection('produto')

    this.produto = this.produtoCollection.snapshotChanges().pipe(
        map((actions: any) => {
          return actions.map(a => {
            const data = a.payload.doc.data()
            const id = a.payload.doc.id
            return {id, ...data}
          });
        })
    );
  }

  all() {
    return this.produto;
  }

  save(produto, id) {
    produto = JSON.parse(JSON.stringify(produto))

    // Caso teja id ele altera, se não insere um novo.
    if (id) {
      return this.produtoCollection.doc(id).update(produto);
    }
    return this.produtoCollection.add(produto)
  }

  delete(id) {
    return this.produtoCollection.doc(id).delete();
  }

  find(id) {
    return this.produtoCollection.doc(id).valueChanges();
  }
}
