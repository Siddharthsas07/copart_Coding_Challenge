calendarApp.service('dataService', function($http){
    
    
    this.getData = function(url) {
        $http.get(url)
            .success(function(data){
                console.log(data);
                return data;
            });
    }
});