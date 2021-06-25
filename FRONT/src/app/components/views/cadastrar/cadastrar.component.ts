import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  pessoa: Pessoa = new Pessoa();
  constructor(private service: PessoaService) { }

  ngOnInit(): void {
  }
  cadastrar(): void{
    this.service.cadastrar(this.pessoa).subscribe((pessoa)=>{
      console.log(pessoa);
    });
  }

}
