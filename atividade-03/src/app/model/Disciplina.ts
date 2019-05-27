import { Curso } from './Curso';

export class Disciplina {
    nome: string
    codigo: string
    turno: string
    ano: string
    curso: Curso = new Curso() 
}
