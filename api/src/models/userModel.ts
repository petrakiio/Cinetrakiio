import { IsEmail, IsString, IsDate} from "class-validator";


export class UserCadastro{
    @IsString()
    nome: string;
    @IsEmail()
    email: string;
    @IsString()
    senha: string;
    @IsDate()
    dataNascimento: Date;
    constructor(nome: string, email: string, senha: string, dataNascimento: Date){
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.dataNascimento = dataNascimento;
    }
}

export class UserLogin{
    @IsEmail()
    email: string;
    @IsString()
    senha: string;
    constructor(email: string, senha: string){
        this.email = email;
        this.senha = senha;
    }
}