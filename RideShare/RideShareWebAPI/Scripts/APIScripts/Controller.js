app.controller('APIController', function ($scope,$location, APIService, dataService) {
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
            if (value.Email == Email && value.Password == Pword) {
                var servCall = APIService.getDrivers();
                servCall.then(function (d) {
                    $scope.drivers = d.data;
                    $scope.validatedCustomer = value;
                    dataService.addCustomer($scope.validatedCustomer);
                    dataService.addDriver($scope.drivers);
                    window.location = "../Views/customer.html";
                }, function (error) {
                    $scope.error('Oops! Something went wrong while fetching the data.');
                })
            }
        })
   }

})

app.controller('customerController', function ($scope, dataService) {


    $scope.populateMapfn = function populateMap() {
        angular.forEach(dataService.driverList, function (value, index) {

        })
    }

})
