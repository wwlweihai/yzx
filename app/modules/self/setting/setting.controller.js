angular.module('app.controller')
    .controller('setting',setting);
setting.$inject = [
    'Restangular',
    '$state',
    '$rootScope',
    '$scope'
];
function setting(Restangular,$state,$rootScope,$scope) {
    $scope.signOut = signOut;
    function signOut(){
        $rootScope.$broadcast('userSignOut', null);
        $state.go('tab.self');
    };
}


