import { Orcamento } from "./orcamento.model";

export class Pedido {
  constructor(
    public id?: number,
    public orcamento?: Orcamento,
    public estado?: string) { }
}
