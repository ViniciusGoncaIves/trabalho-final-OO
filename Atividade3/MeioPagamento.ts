import { ContaBancaria } from "./ContaBancaria";

// ! Interface que define o comportamento de um meio de pagamento para todos que herdarem dela
// ! então serão obrigados a implementar esses métodos
export interface MeioPagamento {
  getDescricao(): string;
  processarPagamento(valor: number, conta: ContaBancaria): boolean;
}
