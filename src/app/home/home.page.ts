import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  quantidadeAdulto1: number = 0;
  quantidadeCrianca1: number = 0;
  totalSalgadinho: number = 0;
  totalRefrigerante: number=0;
  totalBolo: number = 0;
  siglaRefri: string = 'ml';
  siglaBolo: string = 'g';

  constructor() {}

  adicionarAdulto1(){
    this.quantidadeAdulto1++;
    this.calcularTotalConta();
  }
  adicionarCrianca1(){
    this.quantidadeCrianca1++;
    this.calcularTotalConta();
  }

  removerAdulto1(){
    if(this.quantidadeAdulto1 > 0){
      this.quantidadeAdulto1--;
      this.calcularTotalConta();
    }
  }
  removerCrianca1(){
    if(this.quantidadeCrianca1 > 0){
      this.quantidadeCrianca1--;
      this.calcularTotalConta();
    }
  }

  calcularTotalConta(){
    this.totalSalgadinho = 0;
    this.totalSalgadinho += this.quantidadeAdulto1 * 10;
    this.totalSalgadinho += this.quantidadeCrianca1 * 7;

    this.totalRefrigerante = 0;
    this.totalRefrigerante += this.quantidadeAdulto1 * 400;
    this.totalRefrigerante += this.quantidadeCrianca1 * 300;

    this.totalBolo = 0;
    this.totalBolo += this.quantidadeAdulto1 * 100;
    this.totalBolo += this.quantidadeCrianca1 * 100;
    
    this.siglaRefri = 'ml';
    if(this.totalRefrigerante >= 1000){
      this.totalRefrigerante = this.totalRefrigerante/1000;
      this.siglaRefri = 'L';
    }

    this.siglaBolo = 'g';
    if(this.totalBolo >= 1000){
      this.totalBolo = this.totalBolo/1000;
      this.siglaBolo = 'Kg';
    }
  }

  limpar(){
    this.quantidadeAdulto1 = 0;
    this.quantidadeCrianca1 = 0;
    this.calcularTotalConta();
  }
}