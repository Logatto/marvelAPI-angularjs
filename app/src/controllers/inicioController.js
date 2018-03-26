'use strict';

spaApp
  .controller('InicioCtrl', function(inicioService) {

    this.listCharacters = [];
    this.modalComic = {};

    this.listFavorities = [];

    this.existC = false;

    this.search = () =>{
        inicioService.getCharacters(this.word).then( (result) =>{
          this.listCharacters = result.data.results;
        });
    }

    this.getComic = (comic) =>{
      inicioService.getComic(comic).then( (result)=>{
        this.modalComic = result.data.results[0];
        this.existComic(this.modalComic.id);
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
      this.existComic(item.id);

      let items = this.listFavorities;

      if(!this.existC){
        items.push(item);
        localStorage.setItem("favourities",JSON.stringify(items));
        this.existC = true;
      }
      
    }

    this.existComic = (item) =>{
      let found =  this.listFavorities.find((element)=>{
        return (element.id==item);
      });
      
      if(typeof found !== "undefined"){
        this.existC = true;
      }else{
        this.existC = false;
      }

    }

    this.removeFavourite = (item) =>{
      this.getFavourities();

      let items = this.listFavorities;

      let new_items = items.filter((element)=>{
        return element.id != item;
      });

      this.listFavorities = new_items;

      localStorage.setItem("favourities",JSON.stringify(new_items));

    }



  } );