angular.module('app.run')
.run([
    'localStorageService',
    'rockswIonicToast',
    'dataService',
    'UserInfo',
    '$rootScope',
    '$ionicHistory',
    signRun
]);
function signRun(localStorageService,rockswIonicToast,dataService,UserInfo,$rootScope,$ionicHistory){
    console.log("pushRun");
    ionic.Platform.ready(function(){
        activited();
    });
    function activited(){
        $rootScope.globals = localStorageService.get('globals') || {};
        if($rootScope.globals.currentUser){
            $rootScope.isLogin = true;
            var queryParams = {
                where:{
                    userId:$rootScope.globals.currentUser.id
                }
            };
            dataService.get("UserInfo",null,queryParams,getUserInfoSuc(),getUserInfoErr());

            function getUserInfoSuc(){
                return function(data){
                    $rootScope.currentUserInfo = UserInfo.build(data.results[0]);
                }
            };
            function getUserInfoErr(){
                return function(error){
                    rockswIonicToast.show('获取用户信息失败,请检查网络!');
                }
            };
        }else{
            $rootScope.isLogin = false;
        };
    };
    $rootScope.$on('userSignIn', function (event, data) {
        localStorageService.set('globals', data);
        activited();
    });
    $rootScope.$on('userSignOut', function (event, data) {
        localStorageService.remove('globals');
        $ionicHistory.clearCache();
        activited();
    });

}
