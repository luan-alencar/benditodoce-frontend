import { ItemCarrinho } from './item-carrinho';

export interface Carrinho {
  id: number;
  itens: ItemCarrinho[];
  total: number;
}