var PRIV_KEY = "03656eeb2065730d32c6cf2ef11e50f4fb91986e";
var PUBLIC_KEY = "fa2de1079f8bd81b19259c02befff1f0";

var URLBASE = "https://gateway.marvel.com:443/v1/public";

spaApp.factory('inicioService', function($http, $log,md5){
    return {
        getCharacters:function(palabra) {
            var ts = new Date().getTime();

            var hash = md5.createHash( ts + PRIV_KEY + PUBLIC_KEY);

            data_ = {
                ts: ts,
                apikey: PUBLIC_KEY,
                hash: hash,
                nameStartsWith:palabra,
                limit:10
            }

            return $http({method: 'GET', url:URLBASE+'/characters', params:data_ }).
                then(function(response){
                    return response.data;
                });     
        },
        getComic:function(comic){
            var ts = new Date().getTime();
            var hash = md5.createHash( ts + PRIV_KEY + PUBLIC_KEY);

            data_ = {
                ts: ts,
                apikey: PUBLIC_KEY,
                hash: hash
            }

            let comicURL = comic.resourceURI;
            comicURL = comicURL.replace(/^http:\/\//i, 'https://');

            return $http({method: 'GET', url: comicURL  , params:data_ }).
                then(function(response){
                    return response.data;
                }); 

        }

    };	
}
);