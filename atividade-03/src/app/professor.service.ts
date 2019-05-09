import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ProfessorService {

    private professorCollection
    public professor

    constructor(
        private http: HttpClient,
        private db: AngularFirestore
    ) {
        this.professorCollection = this.db.collection('professor')

        this.professor = this.professorCollection.snapshotChanges().pipe(
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
        return this.professor;
    }

    salvar(professor, id) {
        professor = JSON.parse(JSON.stringify(professor))

        // Caso teja id ele altera, se não insere um novo.
        if (id) {
            return this.professorCollection.doc(id).update(professor);
        }
        return this.professorCollection.add(professor)
    }

    excluir(id) {
        return this.professorCollection.doc(id).delete();
    }

    findProfessor(id) {
        return this.professorCollection.doc(id).valueChanges();
    }

}
