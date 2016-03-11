describe('calculator2', function () {
    beforeEach(angular.mock.module('calculatorApp'));

    var $controller;

    beforeEach(angular.mock.inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('sum', function () {
        it('1 + 2 should be equals to 3', function () {
            var scope = {};

            $controller('CalculatorCtrl as calculatorCtrl', {$scope: scope});
            scope.calculatorCtrl.x = 1;
            scope.calculatorCtrl.y = 2;
            scope.calculatorCtrl.sum();
            expect(scope.calculatorCtrl.z).toBe(3);
        });
    });
});