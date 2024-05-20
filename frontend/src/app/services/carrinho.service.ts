import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Carrinho } from "../models/carrinho";

import { ItemCarrinho } from "../models/item-carrinho";

@Injectable({
    providedIn: 'root'
  })
  export class CarrinhoService {
    private carrinho = new BehaviorSubject<Carrinho>({ id: 0, itens: [], total: 0 });
    carrinho$ = this.carrinho.asObservable();
  
    constructor(private http: HttpClient) {}
  
    adicionarItem(item: ItemCarrinho) {
      const carrinhoAtual = this.carrinho.getValue();
      carrinhoAtual.itens.push(item);
      this.atualizarCarrinho(carrinhoAtual);
    }
  
    removerItem(produtoId: number) {
      const carrinhoAtual = this.carrinho.getValue();
      carrinhoAtual.itens = carrinhoAtual.itens.filter(item => item.produtoId !== produtoId);
      this.atualizarCarrinho(carrinhoAtual);
    }
  
    private atualizarCarrinho(carrinho: Carrinho) {
      carrinho.total = carrinho.itens.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
      this.carrinho.next(carrinho);
    }
  
    limparCarrinho() {
      this.carrinho.next({ id: 0, itens: [], total: 0 });
    }
  }

