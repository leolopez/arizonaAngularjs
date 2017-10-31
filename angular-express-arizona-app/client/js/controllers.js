
'use strict';
var app = angular.module("myApp", []);  
       app.controller('AppCtrl', function ($scope, $window, AppFact) {  
  $scope.homelist=[{name: "Discovered the undoubtable source." },{name: "Lorem ipsum comes from sections 1.10.32 and 1.10.33" }
,{name: "Discovered the undoubtable source." }
]
$scope.homelist12= $scope.homelist.slice(0,2);

  $scope.homelist2=[{name: "The Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero, written in 45 BC" },{name: "Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32." }]

  $scope.detaillist=[{name: "Discovered" },{name: "myApp" },{name: "myApp" }]

  $scope.data=AppFact.data;

  $scope.gotoDetails=function ( ){
	$window.location.href = '/details.html';
	}   
    
}).factory('AppFact', function () {  
var arizona= function () { };
    arizona.data=[{ id: 1, title: "Southwestern Vacations", subTitle: "Arizona package", description : "Contrary to popular belief, Lorem ipsum is not simply random text, it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one  of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cities of the word in classical literature.", descriptionTitle : "To The Contrary", description1 : "This book is a treatise on the theory of ethics, very popular during the Renaissance. This book is of Lorem ipsum, 'Lorem ipsum dolor sit amet', comes from a line in section 1.10.32. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.  This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. ", descriptionTitle1 : "Treatise",  detailTitle: "Phoenix", listTitle: "Arizona package", listTitle1: "Arizona package", descList: [], detailTitle1 : "Sedona" 
} ];
    
return arizona;
});

