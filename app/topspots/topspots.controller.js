(function(){
    'use strict';

    angular
        .module('app')
        .controller('topSpotsController', topSpotsController)

    topSpotsController.$inject = ['$http'];

    function topSpotsController($http) {
        /* jshint validthis:true */
        var vm = this;

        $http
        .get('https://raw.githubusercontent.com/OriginCodeAcademy/Cohort12/master/Practical/Week%202/02-SanDiegoTopSpots/topspots.json')
        .then(function(response) {
            console.log(response);
            vm.topspots = response.data;
        })
        

        activate();

        function activate($http) {
            
        }
    }
})();