angular.module('app.controller')
    .controller('index',index);
index.$inject = [
    'rockswIonicToast',
    'Restangular',
    '$rootScope',
    '$scope'
];
function index(rockswIonicToast,Restangular,$rootScope,$scope) {
    $scope.signToday = signToday;
    function signToday(){
        if($rootScope.isLogin){
            rockswIonicToast.show('签到成功');
        }else{
            rockswIonicToast.show('请登录');
        }
    }
}


