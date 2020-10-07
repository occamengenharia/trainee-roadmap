class cachorro {
  /**
   * Atributos
   * - características
   * ex: cor, raça
   * 
   * Métodos 
   * - funções ou ações
   * ex: latir, comer
   */

   constructor(cor) {
     this.cor = cor;
   }

   latir() {
    console.log('latindo');
   }
}


class pinscher extends cachorro {

  constructor() {
  }
  
}


const meuCachorro = new pinscher('pinscher');

console.log(meuCachorro);