var PRIV_KEY = "";
var PUBLIC_KEY = "";

var URLBASE = "https://gateway.marvel.com:443/v1/public/characters";

spaApp.factory('inicioService', function($http, $log,md5){
    return {
        getCharacters:function(palabra) {
            var ts = new Date().getTime();

            var hash = md5.createHash( ts + PRIV_KEY + PUBLIC_KEY);

            data_ = {
                ts: ts,
                apikey: PUBLIC_KEY,
                hash: hash,
                nameStartsWith:palabra
            }

            return $http({method: 'GET', url:URLBASE, params:data_ }).
                then(function(response){
                    return response.data;
                });     
        }
    };	
}
);