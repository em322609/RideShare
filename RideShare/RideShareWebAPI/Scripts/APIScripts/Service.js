app.service("APIService", function ($http) {
    this.getSubs = function () {
        return $http.get("http://localhost:61017/api/Customers")
    }

    this.getDrivers = function () {
        return $http.get("http://localhost:61017/api/Drivers")
    }
});

app.service("dataService", function () {
    this.customer = null;
    this.driverList = null;
})