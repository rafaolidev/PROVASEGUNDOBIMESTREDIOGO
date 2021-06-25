import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { HttpClient } from "@angular/common/http"
import { PessoaService } from 'src/app/services/pessoa.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pessoas: Pessoa[] = [];
  constructor(private service: PessoaService) {
  }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.pessoas = lista;
    });
  }

}
