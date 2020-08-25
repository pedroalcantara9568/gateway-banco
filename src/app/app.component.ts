import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ContaService } from './conta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  contas: Array<any>;
  conta: any;
  
  constructor(private contaService: ContaService) { }

  ngOnInit(): void {
    this.conta = {};
   this.listar();
  }
  listar() {
    this.contaService.listar().subscribe( dados => this.contas = dados) 
}
  criar(frm : FormGroup) {
    this.contaService.criar(this.conta).subscribe(resposta => {
      this.contas.push(resposta);
      frm.reset;

    } )
  }
}
