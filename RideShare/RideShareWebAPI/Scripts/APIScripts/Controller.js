app.controller('APIController', function ($scope, APIService) {
    getAll();

    function getAll() {
        var servCall = APIService.getSubs();
        servCall.then(function (d) {
            $scope.customer = d.data;
        }, function (error) {
            $scope.error('Oops! Something went wrong while fetching the data.');
        })
    }
})