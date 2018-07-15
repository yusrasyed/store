/**
 * Created by studentwtep on 7/8/2017.
 */
var myApp = angular.module('myApp',[]);
myApp.controller('myController',function ($scope) {
    $scope.name='Hira';
    $scope.age=15;
    $scope.products= [
        {name:'Cake 1',price:2000},
        {name:'Cake 2',price:3000},
        {name:'Cake 3',price:1000}];
    $scope.cart=[];
    $scope.total=0;
    $scope.addToCart = function(item){
        item.qty=1;
        $scope.total=$scope.total + item.price;
       $scope.cart.push(item);

    };
});
