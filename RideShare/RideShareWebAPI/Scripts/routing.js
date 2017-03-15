APIModule.config(function ($routeProvider) {
    $routeProvider.when('/index', {
        templateURL: '../views/index.html',
        controller: 'APIController'
    }).otherwise({
        redirectto: '/index'
    });
});