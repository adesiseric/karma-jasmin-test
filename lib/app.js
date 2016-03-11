angular
.module('calculatorApp', [])
.controller('CalculatorCtrl', function () {
    this.z = 0;

    this.sum = function () {
        this.z = this.x + this.y;
    };
});

angular.element(document).ready(function () {
    angular.bootstrap(document, ['calculatorApp']);
});