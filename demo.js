var bank = angular.module('bank', ['ui.router']);

//Controller
bank.controller('account', function($scope){
    $scope.saveSaving = function(saving){
        $scope.dataSaving = {
                'First Name': $scope.fname,
                'Last Name': $scope.lname,
                'Email': $scope.email,
                'Gender': $scope.gender
        }
    }
    
    $scope.clear = function(saving){
        $scope.fname = null;
        $scope.lname = null;
        $scope.email = null;
        $scope.gender = null;
    }
    
    $scope.saveCurrent = function(current){
        $scope.dataCurrent = {
            'First Name': $scope.fname,
            'Last Name': $scope.lname,
            'Email': $scope.email,
            'Gender': $scope.gender
        }
    }
    
    $scope.clear = function(current){
        $scope.fname = null;
        $scope.lname = null;
        $scope.email = null;
        $scope.gender = null;
    }
    
});