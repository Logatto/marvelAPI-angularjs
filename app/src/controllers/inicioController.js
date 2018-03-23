'use strict';

spaApp
  .controller('InicioCtrl', function(inicioService) {

    this.listCharacters = [];

    this.search = () =>{
        console.log("SEARch",this.word);
        inicioService.getCharacters(this.word).then( (result) =>{
            console.log("TERMINO",result);
            this.listCharacters = result.data.results;
        });
    }
  } );