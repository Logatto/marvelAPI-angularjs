'use strict';

spaApp
  .controller('InicioCtrl', function(inicioService) {

    this.listCharacters = [];
    this.modalComic = {};

    this.listFavorities = [];

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

    this.getFavourities = () =>{
      
      this.listFavorities = localStorage.getItem("favourities") === "" ||
      localStorage.getItem("favourities") === null ||
      localStorage.getItem("favourities") === undefined
      ? this.listFavorities
      : JSON.parse(localStorage.getItem("favourities"));
    }

    this.setFavourities = (item)=>{
      this.getFavourities();

      let items = this.listFavorities;
      items.push(item);
      localStorage.setItem("favourities",JSON.stringify(items));
    }



  } );