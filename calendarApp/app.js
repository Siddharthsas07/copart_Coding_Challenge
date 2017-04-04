// MODULE
var calendarApp = angular.module('calendarApp', []);


// CONTROLLERS
calendarApp.controller('homeController', ['$scope', '$http', function($scope, $http) {
    let url = 'https://copart-internship.github.io/Documents/sale-data.json';
    $scope.data = [];
    
        
    // This call gets data from url on copart's git profile
    $http.get(url)
        .success(function(data){
            console.log(data);
//            data.sort(function(a,b){
//                let dateA = a.data.saleList.auctionDate.date;
//                let dateB = b.data.saleList.auctionDate.date;
//                return dateA - dateB;
//            });
            
            // Grouping by date for all 274 object entries
            var groups = { };
            data.data.saleList.forEach(function(item){
//                console.log(item.auctionDate.dateAsInt); 
                var list = groups[item.auctionDate.dateAsInt];
                if(list){
                    list.push(item);
                } else{
                    groups[item.auctionDate.dateAsInt] = [item];
                }
            });
            
            $scope.data = groups;
    });
    
    //console.log(dataService.getData());
    //console.log($scope.data);
    //console.log($scope);
    
    // To convert long value of date in local DATE with readable string format
    $scope.convertToDate = function(dt){
        var date = new Date(dt + 2*60*60000 + new Date(dt).getTimezoneOffset() * 60000); // last two addition provides local time
        return date;  
    };
    
    // To convert long value of date in local TIME with readable string format
    $scope.convertToTime = function(dt){
        var date = new Date(dt + 2*60*60000 + new Date(dt).getTimezoneOffset() * 60000);
//        console.log(date.getTimezoneOffset());
//        console.log(date.getTime());
        return date.toTimeString();  
    };
    
}]);





