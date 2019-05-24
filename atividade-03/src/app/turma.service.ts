import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class TurmaService {

    private turmaCollection
    public turma

    constructor(
        private http: HttpClient,
        private db: AngularFirestore
    ) {
        this.turmaCollection = this.db.collection('turma')

        this.turma = this.turmaCollection.snapshotChanges().pipe(
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
        return this.turma;
    }

    salvar(turma, id) {
        turma = JSON.parse(JSON.stringify(turma))

        // Caso teja id ele altera, se não insere um novo.
        if (id) {
            return this.turmaCollection.doc(id).update(turma);
        }
        return this.turmaCollection.add(turma)
    }

    excluir(id) {
        return this.turmaCollection.doc(id).delete();
    }

    findTurma(id) {
        return this.turmaCollection.doc(id).valueChanges();
    }
}
