export class Usuario {
  constructor(
    public id?: number,
    public nome?: string,
    public cpf?: string,
    public senha: string = 'senha',
    public endereco?: string,
    public telefone?: string,
    public email?: string
  ) { }
}
