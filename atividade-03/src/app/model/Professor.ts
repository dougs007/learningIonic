import {Endereco} from './Endereco';

export class Professor {

    nome: string
    datanasc: string
    sexo: string
    telefone: string
    matricula: string
    endereco: Endereco = new Endereco();
}
