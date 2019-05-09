import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DisciplinaService {

    private disciplinaCollection
    public disciplina

    constructor(
        private http: HttpClient,
        private db: AngularFirestore
    ) {
        this.disciplinaCollection = this.db.collection('disciplina')

        this.disciplina = this.disciplinaCollection.snapshotChanges().pipe(
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
        return this.disciplina;
    }

    salvar(disciplina, id) {
        disciplina = JSON.parse(JSON.stringify(disciplina))

        // Caso teja id ele altera, se não insere um novo.
        if (id) {
            return this.disciplinaCollection.doc(id).update(disciplina);
        }
        return this.disciplinaCollection.add(disciplina)
    }

    excluir(id) {
        return this.disciplinaCollection.doc(id).delete();
    }

    findDisciplina(id) {
        return this.disciplinaCollection.doc(id).valueChanges();
    }
}
