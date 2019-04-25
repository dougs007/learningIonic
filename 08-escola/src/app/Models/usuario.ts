import { Endereco } from './endereco';

export class Usuario {
    nome: string
    matricula: string
    telefone: string
    data_nascimento: string
    sexo: string
    endereco: Endereco = new Endereco();
}
