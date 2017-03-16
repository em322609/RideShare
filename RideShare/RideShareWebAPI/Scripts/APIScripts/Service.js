app.service("APIService", function ($http) {
    this.getSubs = function () {
        return $http.get("http://localhost:61017/api/Customers")
    }

    this.getDrivers = function () {
        return $http.get("http://localhost:61017/api/Drivers")
    }
});

app.factory("dataService", function () {
    this.driverList = null;
    this.customer = null;

    this.addDriver = function (drivers) {
        this.driverList = drivers;
        
    }

    this.addCustomer = function (customer) {
        this.customer = customer;
       
    }

    return {
        driverList : this.driverList,
        customer : this.customer
           };
});