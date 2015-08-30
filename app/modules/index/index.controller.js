angular.module('app.controller')
    .controller('index',index);
index.$inject = [
    'rockswIonicToast',
    'Restangular',
    '$state',
    '$scope'
];
function index(rockswIonicToast,Restangular,$state,$scope) {
    $scope.signToday = signToday;
    function signToday(){
        rockswIonicToast.show('签到成功');
    }
}


