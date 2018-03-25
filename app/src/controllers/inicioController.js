'use strict';

spaApp
  .controller('InicioCtrl', function(inicioService) {

    this.listCharacters = [];
    this.modalComic = {};

    this.search = () =>{
        console.log("SEARch",this.word);
        inicioService.getCharacters(this.word).then( (result) =>{
          console.log("TERMINO",result);
          this.listCharacters = result.data.results;
        });
    }

    this.getComic = (comic) =>{
      inicioService.getComic(comic).then( (result)=>{
        console.log("RESU",result.data.results);
        this.modalComic = result.data.results[0];
      });
    }



  } );