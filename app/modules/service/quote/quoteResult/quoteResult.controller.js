angular.module('app.controller')
    .controller('quoteResult',quoteResult);
quoteResult.$inject = [
    '$stateParams',
    '$scope'
];
function quoteResult($stateParams,$scope) {
    $scope.quotePrice = $stateParams.quotePrice;
}
