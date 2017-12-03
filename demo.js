var bank = angular.module('bank', ['ui.router']);

//Controller
bank.controller('account', function($scope, $http){
   
    
    
    $http.get('http://battuta.medunes.net/api/country/all/?key=5b55ae07cddee5ceb1d37feee42d3de2')
    .then(function(response){
    $scope.countryList = response.data;
    });
    
    
    $scope.getState = function(){
    var countryCode = $scope.country;
    var url = 'http://battuta.medunes.net/api/region/' + countryCode + '/all/?key=5b55ae07cddee5ceb1d37feee42d3de2';
    $http.get(url)
    .then(function(response){
    $scope.regionList = response.data;
    });
    }
    
    $scope.getCity = function(){
    var countryCode = $scope.country;
    var region = $scope.region.region;
    console.log(region);
    var url = 'http://battuta.medunes.net/api/city/' + countryCode + '/search/?region=' + region + '&key=5b55ae07cddee5ceb1d37feee42d3de2';
    $http.get(url)
    .then(function(response){
    $scope.cityList = response.data;
    })
    }
    
    
    
    
    
    $scope.saveSaving = function(saving){
        $scope.dataSaving = {'First Name': $scope.fname,'Last Name': $scope.lname,'Email': $scope.email,'Gender': $scope.gender,'Country': $scope.country.name,'Region': $scope.region.region,'City': $scope.city.city}
    }
    
    $scope.clear = function(saving){
        $scope.fname = null;
        $scope.lname = null;
        $scope.email = null;
        $scope.gender = null;
        $scope.country = null;
        $scope.region = null;
        $scope.city = null;

    }
    
    $scope.saveCurrent = function(current){
        $scope.dataCurrent = {'First Name': $scope.fname,'Last Name': $scope.lname,'Email': $scope.email,'Gender': $scope.gender,'Country': $scope.country.name,'Region': $scope.region.region,'City': $scope.city.city
        }
    }
    
    $scope.clear = function(current){
        $scope.fname = null;
        $scope.lname = null;
        $scope.email = null;
        $scope.gender = null;
        $scope.country = null;
        $scope.region = null;
        $scope.city = null;
    }
    
});