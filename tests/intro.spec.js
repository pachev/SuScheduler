
describe("IntroCtrl", function() {
    beforeEach(module('ionic'));
    beforeEach(module('starter.services'));
    beforeEach(module('starter.controllers'));

    var $scope, $controller;

    beforeEach(inject(function(_$controller_){
        $scope = {};
        $controller = _$controller_('IntroCtrl', { $scope: $scope });
    }));

    it("show the introduction on first run", function() {
    });

    describe('$scope.test', function() {
        it('returns what you send it', function() {
            var num = 15;
            expect($scope.test(num)).toEqual(15);
        });
    });
});
