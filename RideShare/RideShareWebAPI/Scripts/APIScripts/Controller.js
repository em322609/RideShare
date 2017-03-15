app.controller('APIController', function ($scope, APIService) {
    getAll();

    function getAll() {
        var servCall = APIService.getSubs();
        servCall.then(function (d) {
            console.log(d.data);
            $scope.customer = d.data;
        }, function (error) {
            $scope.error('Oops! Something went wrong while fetching the data.');
        })
    }

   $scope.check = function checkCustomer(Email,Pword) {
        angular.forEach($scope.customer, function (value, index) {
            console.log(value.Email);
            if (value.Email == Email && value.Password == Pword) {
                var servCall = APIService.getDrivers();
                servCall.then(function (d) {
                    console.log(d.data);
                    $scope.drivers = d.data;
                }, function (error) {
                    $scope.error('Oops! Something went wrong while fetching the data.');
                })
            }
        })
    }
    
})

app.controller('customerController', function ($scope) {
   
})

app.controller('driverController', function ($scope) {

})

app.controller('rideStatusController', function ($scope) {

})

app.controller('aboutController', function ($scope) {

})