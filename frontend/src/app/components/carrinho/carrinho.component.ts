import { Component, OnInit } from '@angular/core';
import { Carrinho } from 'src/app/models/carrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho: Carrinho;

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carrinhoService.carrinho$.subscribe(carrinho => this.carrinho = carrinho);
  }

  removerItem(produtoId: number) {
    this.carrinhoService.removerItem(produtoId);
  }

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
  }
}
