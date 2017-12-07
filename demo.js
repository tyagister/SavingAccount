var bank = angular.module('bank', ['ui.router']);

//Controller
bank.controller('account', function($scope,$rootScope,$http){

});

bank.controller('savingController', function($scope, $http){
    $http.get('http://battuta.medunes.net/api/country/all/?key=79bcc69664c522fb271622dcb390bc81')
    .then(function(response){
    $scope.countryList = response.data;
    });
    
    $scope.getState = function(){
        var countryCode = $scope.savingcountry;
        var url = 'http://battuta.medunes.net/api/region/' + countryCode + '/all/?key=79bcc69664c522fb271622dcb390bc81';
        $http.get(url)
        .then(function(response){
        $scope.regionList = response.data;
        });
    }
    
    $scope.getCity = function(){
        var countryCode = $scope.savingcountry;
        var region = $scope.savingregion.region;
        var url = 'http://battuta.medunes.net/api/city/' + countryCode + '/search/?region=' + region + '&key=79bcc69664c522fb271622dcb390bc81';
        $http.get(url)
        .then(function(response){
        $scope.cityList = response.data;
        })
    }
    
    $scope.saveSaving = function(saving){
        $scope.dataSaving = {
            'First Name': $scope.savingfname,
            'Last Name': $scope.savinglname,
            'Email': $scope.savingemail,
            'Gender': $scope.savinggender,
            'Country': $scope.savingcountry,
            'Region': $scope.savingregion,
            'City': $scope.savingcity
        }
        localStorage.setItem('savingData', $scope.dataSaving)
    }
    
    $scope.clear = function(saving){
        $scope.savingfname = null;
        $scope.savinglname = null;
        $scope.savingemail = null;
        $scope.savinggender = null;
        $scope.savingregion = null;
        $scope.savingregion = null;
        $scope.savingcity = null;
    }
    
});

bank.controller('currentController', function($scope, $http){
    $http.get('http://battuta.medunes.net/api/country/all/?key=79bcc69664c522fb271622dcb390bc81')
    .then(function(response){
    $scope.countryList = response.data;
    });
    
    $scope.getState = function(){
        var countryCode = $scope.currentcountry;
        var url = 'http://battuta.medunes.net/api/region/' + countryCode + '/all/?key=79bcc69664c522fb271622dcb390bc81';
        $http.get(url)
        .then(function(response){
        $scope.regionList = response.data;
        });
    }
    
    $scope.getCity = function(){
        var countryCode = $scope.currentcountry;
        var region = $scope.currentregion.region;
        var url = 'http://battuta.medunes.net/api/city/' + countryCode + '/search/?region=' + region + '&key=79bcc69664c522fb271622dcb390bc81';
        $http.get(url)
        .then(function(response){
        $scope.cityList = response.data;
        })
    }
    
     $scope.saveCurrent = function(current){
        $scope.dataCurrent = {
            'First Name': $scope.currentfname,
            'Last Name': $scope.currentlname,
            'Email': $scope.currentemail,
            'Gender': $scope.currentgender,
            'Country': $scope.currentcountry,
            'Region': $scope.currentregion,
            'City': $scope.currentcity
        }
         localStorage.setItem('currentData', $scope.dataCurrent)
    }
    
    $scope.clear = function(current){
        $scope.currentfname = null;
        $scope.currentlname = null;
        $scope.currentemail = null;
        $scope.currentgender = null;
        $scope.currentcountry = null;
        $scope.currentregion = null;
        $scope.currentcity = null;
    }
    
});