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

    function checkCustomer($scope) {

    }
})