
var app = angular.module( 'falemais', [ 'ngMaterial','ui.bootstrap','angular.filter' ] );

app.service("feesService", function(){
	var fees = [
		{
      origem: 11,
      destino: 16,
      taxaMinuto: 1.90
    }, {
      origem: 16,
      destino: 11,
      taxaMinuto: 2.90
    }, {
      origem: 11,
      destino: 17,
      taxaMinuto: 1.70
    }, {
      origem: 17,
      destino: 11,
      taxaMinuto: 2.70
    }, {
      origem: 11,
      destino: 18,
      taxaMinuto: 0.90
    }, {
      origem: 18,
      destino: 11,
      taxaMinuto: 1.90
    }];


		this.getFees = function(){
			return fees;
		};

});

app.controller("faleMais", function($scope, feesService){

	$scope.fees = feesService.getFees();

	$scope.faleMais30 = function(fee, duration){
		if (duration <= 30) {
			return 0;
		} else {
			return fee * 1.1 * (duration - 30);
		};
	};
	$scope.faleMais60 = function(fee, duration){
		if (duration <= 60) {
			return 0;
		} else {
			return fee * 1.1 * (duration - 60);
		};
	};
	$scope.faleMais120 = function(fee, duration){
		if (duration <= 120) {
			return 0;
		} else {
			return fee * 1.1 * (duration - 120);
		};
	};


} );
