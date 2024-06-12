import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any;
  options: any;
  emocoes = [
    {
      nome: 'Alegria',
      valor: 0,
      styleClass: 'alegria',
      positiva: true,
      color: '#FFFF00'
    },
    {
      nome: 'Paz',
      valor: 0,
      styleClass: 'paz',
      positiva: true,
      color: '#87CEFA'
    },
    {
      nome: 'Satisfação',
      valor: 0,
      styleClass: 'satisfacao',
      positiva: true,
      color: '#EE82EE'
    },
    {
      nome: 'Entusiasmo',
      valor: 0,
      styleClass: 'entusiasmo',
      positiva: true,
      color: '#00FF00'
    },
    {
      nome: 'Tristeza',
      valor: 0,
      styleClass: 'tristeza',
      positiva: false,
      color: '#D8BFD8'
    },
    {
      nome: 'Medo',
      valor: 0,
      styleClass: 'medo',
      positiva: false,
      color: '#708090'
    },
    {
      nome: 'Ansiedade',
      valor: 0,
      styleClass: 'ansiedade',
      positiva: false,
      color: '#FF8C00'
    },
    {
      nome: 'Raiva',
      valor: 0,
      styleClass: 'raiva',
      positiva: false,
      color: '#FF0000'
    },
    {
      nome: 'Solidão',
      valor: 0,
      styleClass: 'solidao',
      positiva: false,
      color: '#5F9EA0'
    }
  ];
  precisaAjuda = false;
  podeAjudar = false;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: false
        }
      }
    };
  }

  atualizarGrafico() {
    const valorTotalPositivo = this.emocoes.filter( item => item.positiva).reduce( (a, b) => a + b.valor, 0);
    const valorTotalNegativo = this.emocoes.filter( item => !item.positiva).reduce( (a, b) => a + b.valor, 0);
    const principaisEmocoes = Array.from(this.emocoes);
    const dataList = principaisEmocoes.sort( (a, b) => b.valor -a.valor).slice(0, 5)
    this.data = {
      labels: dataList.map( item => item.nome),
      datasets: [
          {
              data: dataList.map( item => item.valor),
              backgroundColor: dataList.map( item => item.color),
              hoverBackgroundColor: dataList.map( item => item.color)
          }
      ]
    };
    if(valorTotalNegativo > valorTotalPositivo) {
      this.precisaAjuda = true;
      this.podeAjudar = false;
    } else {
      this.precisaAjuda = false;
      this.podeAjudar = true;
    }
  }

}
