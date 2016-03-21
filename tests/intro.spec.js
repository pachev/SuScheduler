
describe("IntroCtrl", function() {
    beforeEach(module('starter.controllers'));

    var $scope, $controller;

    beforeEach(inject(function(_$rootScope_, _$controller_){
        $scope = {};
        $controller = _$controller_('IntroCtrl', { $scope: $scope });
    }));

    describe('$scope.test', function() {
        it('returns what you send it', function() {
            var num = 15;
            expect($scope.test(num)).toEqual(15);
        });
    });
});
