import { Component, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';


@Component({
  selector: 'app-contas-listagem',
  templateUrl: './contas-listagem.component.html',
  styleUrls: ['./contas-listagem.component.css']
})
export class ContasListagemComponent implements OnInit {
  
  contas: Array<any>;

  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
   this.listar();
  }
  listar() {
    this.contaService.listar().subscribe( dados => this.contas = dados) 
}
}
